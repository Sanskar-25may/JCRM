import React from 'react';
import { client, projectId } from '@/lib/sanity/client';
import { allProductsQuery } from '@/lib/sanity/queries';
import ProductGrid from '@/components/sections/ProductGrid';
import { mockErpProducts } from '@/data/mockData';

export const revalidate = 60;

export default async function ErpSolutions() {
  let products = [];
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      products = await client.fetch(allProductsQuery);
    } catch (err) {
      console.error("Failed to fetch products from Sanity, using mock data fallback:", err);
    }
  }

  // Fallback if empty
  const activeProducts = products && products.length > 0
    ? products.map((p: any) => ({
        _id: p._id,
        title: p.title,
        slug: p.slug,
        tagline: p.tagline || 'ERP System',
        description: p.description || '',
        stats: p.stats || [],
        accentColor: p.accentColor || '#0066ff'
      }))
    : mockErpProducts.map((p) => ({
        _id: p.id,
        title: p.name,
        slug: p.id,
        tagline: p.badge || 'ERP System',
        description: p.description,
        stats: p.features || [],
        accentColor: '#0066ff'
      }));

  return (
    <div className="pt-24 font-sans bg-slate-50/20">
      {/* Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#051937] tracking-tight">
            Enterprise ERP Solutions
          </h1>
          <p className="text-slate-500 text-sm mt-3.5 max-w-xl mx-auto">
            Secure, cloud-ready, and purpose-built software systems designed to scale your operations.
          </p>
        </div>
      </section>

      {/* Render Product Grid */}
      <ProductGrid products={activeProducts} />
    </div>
  );
}
