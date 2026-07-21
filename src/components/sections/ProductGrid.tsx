import React from 'react';
import ProductCard from '../shared/ProductCard';

interface ProductData {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  stats?: string[];
  accentColor?: string;
}

interface ProductGridProps {
  products?: ProductData[];
}

export default function ProductGrid({ products = [] }: ProductGridProps) {
  return (
    <section className="py-24 bg-white/30 backdrop-blur-sm section-divider-top">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16 glass p-8 shadow-lg shadow-primary/5">
          <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
            Enterprise Solutions
          </span>
          <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight">
            Our ERP Products
          </h2>
          <p className="text-sm text-[#0a2e5c]/85 mt-2.5 leading-relaxed">
            Modular software architectures built to streamline operations and power growth.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                title={product.title}
                slug={product.slug}
                tagline={product.tagline}
                description={product.description}
                stats={product.stats}
                accentColor={product.accentColor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400 py-10">
            No products configured. Load them inside Sanity Studio.
          </div>
        )}
      </div>
    </section>
  );
}
