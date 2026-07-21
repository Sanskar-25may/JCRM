'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { submitDemoRequest } from '@/lib/actions/formSubmit';

function ContactUsContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || 'LMS';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      product: initialProduct,
      message: '',
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedProduct, setSubmittedProduct] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const selectedProduct = watch('product');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const response = await submitDemoRequest(data);
      if (response.success) {
        setSubmittedName(data.name);
        setSubmittedProduct(data.product);
        setSubmittedEmail(data.email);
        setSubmitted(true);
      } else {
        setSubmitError('Failed to process request. Please check validation rules.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError('An unexpected connection error occurred.');
    }
  };

  const products = [
    'LMS (Learning Management System)',
    'HR Management System',
    'Hospital ERP System',
    'Accounting ERP System',
    'Gym Management Software',
    'Cab Booking Software',
    'Food Delivery Platform',
    'E-Commerce Suite',
    'Chatbot Platform',
    'Fraud Detection Engine',
    'Custom ERP Request',
  ];

  return (
    <div className="pt-24 font-sans bg-transparent">
      {/* Header Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-black text-[#051937] tracking-tight">
            Contact <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">Our Desk</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3.5 max-w-xl mx-auto leading-relaxed">
            Request a custom ERP product demo or connect with our solutions support desk.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 bg-white/30 backdrop-blur-sm border-t border-slate-200/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left side info */}
            <div className="flex flex-col items-start text-left">
              <span className="inline-block text-xs font-bold text-[#0066ff] bg-[#0066ff]/8 border border-[#0066ff]/15 px-4.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight mb-4">
                Let&apos;s Build Something Smarter Together
              </h2>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/85 mb-8">
                Have questions about our modular ERP products? Or looking for internship program dates? Reach out to us directly through any of our coordinates:
              </p>

              <div className="flex flex-col gap-6 w-full mb-8">
                <div className="flex gap-4 items-start p-5 glass rounded-2xl border border-slate-200/30">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center flex-shrink-0 text-sm">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#051937] mb-1">Corporate HQ</h5>
                    <p className="text-xs text-[#0a2e5c]/80 leading-relaxed">404, 1st floor, 4th A Cross Rd, HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka 560043</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 glass rounded-2xl border border-slate-200/30">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center flex-shrink-0 text-sm">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#051937] mb-1">HR &amp; Careers Desk</h5>
                    <p className="text-xs text-[#0a2e5c]/80"><a href="mailto:hr@jcrm.in" className="hover:text-[#0066ff] transition-colors">hr@jcrm.in</a></p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 glass rounded-2xl border border-slate-200/30">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center flex-shrink-0 text-sm">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#051937] mb-1">Direct Helpline</h5>
                    <p className="text-xs text-[#0a2e5c]/80"><a href="tel:+918310531309" className="hover:text-[#0066ff] transition-colors">+91 8310531309</a></p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Mockup (Rich Aesthetics) */}
              <div className="w-full glass rounded-3xl border border-slate-200/40 p-5 overflow-hidden">
                <div className="flex items-center gap-2 mb-3.5 text-[#051937] font-bold text-xs">
                  <i className="fa-solid fa-map-location-dot text-[#0066ff]"></i>
                  <span>Bengaluru HQ Map Location</span>
                </div>
                <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[140px]">
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                  <i className="fa-solid fa-location-pin text-red-500 text-3xl mb-2.5 animate-bounce"></i>
                  <p className="font-bold text-sm">JCRM Technologies Pvt Ltd</p>
                  <span className="text-[10px] text-slate-400 font-mono mt-1">13.0189° N, 77.6432° E</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full">
              <div className="glass p-8 md:p-10 rounded-[32px] border border-slate-200/40 shadow-xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-left">
                    <div>
                      <h3 className="text-xl font-bold text-[#051937] tracking-tight">Request Demo / Quote</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Provide your details below. Our solutions architect will call you back to schedule a demo session.</p>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-xs font-semibold flex items-center gap-2">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        {submitError}
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-[#051937]">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className={`w-full text-xs font-semibold py-3 px-4 rounded-xl border bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 ${
                          errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200"
                        }`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-[#051937]">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john.doe@company.com"
                        className={`w-full text-xs font-semibold py-3 px-4 rounded-xl border bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 ${
                          errors.email ? "border-red-400 focus:border-red-500" : "border-slate-200"
                        }`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-[#051937]">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 9876543210"
                        className={`w-full text-xs font-semibold py-3 px-4 rounded-xl border bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 ${
                          errors.phone ? "border-red-400 focus:border-red-500" : "border-slate-200"
                        }`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="product" className="text-xs font-bold text-[#051937]">Target ERP System / Solution</label>
                      <select
                        id="product"
                        value={selectedProduct}
                        onChange={(e) => setValue('product', e.target.value)}
                        className="w-full text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200"
                      >
                        {products.map((p) => (
                          <option key={p} value={p.split(' (')[0]}>
                            {p}
                          </option>
                        ))}
                      </select>
                      {errors.product && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.product.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-[#051937]">Message / System Requirements</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Briefly describe your business operations, number of users, or customization requirements..."
                        className="w-full text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 resize-none"
                        {...register('message')}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ffb700] hover:bg-[#ffaa00] disabled:bg-slate-300 text-[#051937] font-bold px-8 py-3.5 rounded-full text-sm transition-all w-full flex items-center justify-center gap-1.5 mt-3 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Demo Request'}
                      <i className="fa-solid fa-circle-chevron-right text-xs"></i>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mb-5">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#051937] mb-2">Demo Request Sent!</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Thank you for your inquiry, <strong>{submittedName}</strong>. Our solutions engineer will email or call you at <strong>{submittedEmail}</strong> within 24 working hours to configure and demonstrate your testing environment.
                    </p>
                    <button
                      className="inline-flex justify-center items-center bg-white border border-slate-200 text-slate-800 font-bold px-7 py-3 rounded-full text-xs transition-all hover:bg-slate-50 shadow-sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Query
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', background: '#ffffff', color: '#034571', fontWeight: 700 }}>
        Loading Contact Form...
      </div>
    }>
      <ContactUsContent />
    </Suspense>
  );
}
