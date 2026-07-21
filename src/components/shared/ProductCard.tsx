import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  stats?: string[];
  accentColor?: string;
}

export default function ProductCard({
  title,
  slug,
  tagline,
  description,
  stats = [],
  accentColor = '#0066ff',
}: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white border border-primary/10 rounded-2xl p-6 shadow-md shadow-primary/4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 hover:border-primary/20">
      <div className="flex-1 mb-5">
        <span
          className="inline-block text-[11px] font-bold py-1 px-3 rounded-full mb-3 uppercase tracking-wider"
          style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
        >
          {tagline}
        </span>
        <h3 className="text-xl font-bold text-[#051937] tracking-tight mb-2.5">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#0a2e5c]/80 line-clamp-3">
          {description}
        </p>
      </div>

      {stats.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100/50">
          {stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Key Stat
              </span>
              <span className="text-sm font-bold text-[#051937] mt-0.5">{stat}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        href={`/erp-solutions/${slug}`}
        className="inline-flex justify-between items-center text-sm font-bold py-2.5 px-5 rounded-xl transition-all duration-200 text-center"
        style={{ backgroundColor: accentColor, color: '#ffffff' }}
      >
        <span>Explore Solution</span>
        <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
      </Link>
    </div>
  );
}
