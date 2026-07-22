'use client';

import React from 'react';

export default function GlassTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Vanshika Srivastava',
      role: 'Python Developer at Wipro',
      avatar: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
      content: 'The Python & Full-Stack training at JCRM Technologies was career-changing. The mock interviews and placement support helped me secure a developer role at Wipro with a great package!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Yashika Ghai',
      role: 'HR Specialist at Cognizant',
      avatar: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779823236/jcrm/profile/uo8yuce5hgcd7bvnop8m.jpg',
      content: 'JCRM Technologies provided clear structured guidance and personality development sessions. They connected me directly with Cognizant recruiters. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Kushagra Saxena',
      role: 'Finance Specialist at KPMG',
      avatar: 'https://jcrm.in/uploads/profile/1778152018_e62753474594f2619563.jpg',
      content: 'Apart from coding skills, JCRM taught us executive presentation and corporate communication. The mentors are top notch and truly care about every student’s success.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 glass-pill text-xs font-bold text-[#0047ba] uppercase tracking-widest mb-3">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          What Our <span className="text-gradient-blue">Alumni Say</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Read success stories from students who transitioned into top MNC software roles through JCRM.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-amber-400 text-lg mb-4">
                {'★'.repeat(item.rating)}
              </div>

              {/* Quote Content */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                "{item.content}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-600/30"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-blue-700 font-medium">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
