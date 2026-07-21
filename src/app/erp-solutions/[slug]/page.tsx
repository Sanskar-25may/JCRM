import React from 'react';
import { client, projectId } from '@/lib/sanity/client';
import { productBySlugQuery, allProductsQuery } from '@/lib/sanity/queries';
import { mockErpProducts } from '@/data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";
  if (!isSanityConfigured) {
    return mockErpProducts.map((p) => ({ slug: p.id }));
  }
  try {
    const products = await client.fetch(allProductsQuery);
    return products.map((prod: any) => ({
      slug: prod.slug || 'unknown',
    }));
  } catch (err) {
    console.error("Static params fallback for products:", err);
    return mockErpProducts.map((p) => ({ slug: p.id }));
  }
}

export default async function ErpProductDetail({ params }: PageProps) {
  const { slug } = await params;
  
  let product = null;
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      product = await client.fetch(productBySlugQuery, { slug });
    } catch (err) {
      console.error("Failed to fetch product by slug:", err);
    }
  }

  // Fallback to mock data if not found in Sanity
  if (!product) {
    const mock = mockErpProducts.find((p) => p.id === slug);
    if (!mock) {
      notFound();
    }
    product = {
      title: mock.name,
      slug: mock.id,
      tagline: mock.badge || 'ERP Solution',
      description: mock.description,
      features: mock.features || [],
      stats: [],
      accentColor: '#0066ff',
      images: []
    };
  }

  const accentColor = product.accentColor || '#0066ff';

  return (
    <div className="pt-24 font-sans bg-slate-50/20">
      <div className="container-custom py-12">
        {/* Back Link */}
        <Link href="/erp-solutions" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0066ff] transition-colors mb-8">
          <i className="fa-solid fa-arrow-left"></i> Back to ERP Catalog
        </Link>

        {/* Content Box */}
        <div className="glass rounded-[32px] border border-slate-200/40 p-8 lg:p-12 shadow-xl shadow-primary/5">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="flex-1">
              <span
                className="inline-block text-[11px] font-bold py-1.5 px-4 rounded-full mb-4 uppercase tracking-wider"
                style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
              >
                {product.tagline}
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#051937] tracking-tight mb-6">
                {product.title}
              </h1>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/80 mb-8 whitespace-pre-wrap">
                {product.description}
              </p>

              {/* Dynamic Accent colored call to action */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-primary/10"
                  style={{ backgroundColor: accentColor }}
                >
                  Schedule Free Live Demo
                </Link>
                <a
                  href="tel:+918310531309"
                  className="inline-flex items-center justify-center border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                >
                  Call Advisor
                </a>
              </div>
            </div>

            {/* Right Features Column */}
            <div className="w-full lg:w-[400px] bg-[#f3f0eb] border border-slate-200/40 p-8 rounded-[24px] flex flex-col justify-start">
              <h3 className="text-xs font-bold text-[#051937] uppercase tracking-wider mb-6 pb-2 border-b border-slate-200/60">
                Core Modules &amp; Specs
              </h3>
              
              {product.features && product.features.length > 0 ? (
                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                  {product.features.map((feat: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold text-base mt-0.5" style={{ color: accentColor }}>✓</span>
                      <span className="text-xs font-semibold text-[#0a2e5c] leading-normal">{feat}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-xs text-slate-400">No custom modules loaded.</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
