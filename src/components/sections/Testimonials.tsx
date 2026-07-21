import React from 'react';

interface TestimonialData {
  _id: string;
  author: string;
  role: string;
  text: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials?: TestimonialData[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
  return (
    <section className="py-20 bg-slate-50/40 border-y border-slate-100">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16 bg-white/90 border border-primary/25 rounded-2xl py-5 px-10 shadow-lg shadow-primary/8">
          <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
            Success Stories
          </span>
          <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm text-[#0a2e5c]/85 mt-2.5 leading-relaxed">
            Read positive feedback from our corporate clients and successful trainee alumni.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item._id} className="flex flex-col bg-white border border-slate-100 rounded-2xl p-7 shadow-sm transition-shadow hover:shadow-md">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4 text-[#ffb700] text-sm">
                  {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#0a2e5c]/80 flex-1 italic mb-5">
                  "{item.text}"
                </p>
                <div className="border-t border-slate-50 pt-4">
                  <h4 className="text-sm font-bold text-[#051937]">{item.author}</h4>
                  <span className="text-xs text-[#0a2e5c]/60 mt-0.5 block">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400 py-10">
            No testimonials configured. Load them inside Sanity Studio.
          </div>
        )}
      </div>
    </section>
  );
}
