'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { submitDemoRequest } from '@/lib/actions/formSubmit';
import styles from './contactus.module.css';

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
    <div className={styles.contactPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Contact Us</h1>
          <p className="reveal delay-1">Request a custom ERP product demo or connect with our support desk</p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left side info */}
            <div className={`${styles.left} reveal`}>
              <span className={styles.badge}>GET IN TOUCH</span>
              <h2>Let&apos;s Build Something Smarter Together</h2>
              <p className={styles.text}>
                Have questions about our modular ERP products? Or looking for internship program dates? Reach out to us directly through any of our coordinates:
              </p>

              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h5>Corporate HQ</h5>
                    <p>404, 1st floor, 4th A Cross Rd, HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka 560043</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <h5>HR &amp; Careers Desk</h5>
                    <p><a href="mailto:hr@jcrm.in">hr@jcrm.in</a></p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <h5>Direct Helpline</h5>
                    <p><a href="tel:+918310531309">+91 8310531309</a></p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Mockup (Rich Aesthetics) */}
              <div className={styles.mapMockup}>
                <div className={styles.mapHeader}>
                  <i className="fa-solid fa-map-location-dot"></i>
                  <span>Bengaluru HQ Map Location</span>
                </div>
                <div className={styles.mapBody}>
                  <i className="fa-solid fa-location-pin"></i>
                  <p className={styles.mapPinText}>JCRM Technologies Pvt Ltd</p>
                  <span className={styles.mapCoords}>13.0189° N, 77.6432° E</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className={`${styles.right} reveal delay-1`}>
              <div className={styles.formCard}>
                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <h3 className={styles.formTitle}>Request Demo / Quote</h3>
                    <p className={styles.formSubtitle}>Provide your corporate details. Our solutions architect will call you back to schedule a demo session.</p>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-xs font-semibold mb-5 flex items-center gap-2">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        {submitError}
                      </div>
                    )}

                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className={errors.name ? "border-red-400 focus:border-red-500" : ""}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john.doe@company.com"
                        className={errors.email ? "border-red-400 focus:border-red-500" : ""}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 9876543210"
                        className={errors.phone ? "border-red-400 focus:border-red-500" : ""}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="product">Target ERP System / Solution</label>
                      <select
                        id="product"
                        value={selectedProduct}
                        onChange={(e) => setValue('product', e.target.value)}
                      >
                        {products.map((p) => (
                          <option key={p} value={p.split(' (')[0]}>
                            {p}
                          </option>
                        ))}
                      </select>
                      {errors.product && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.product.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message / System Requirements</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Briefly describe your business operations, number of users, or customization requirements..."
                        {...register('message')}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ffb700] hover:bg-[#d97706] disabled:bg-slate-300 text-[#051937] font-bold px-6 py-3 rounded-full text-xs transition-all w-full flex items-center justify-center gap-1.5 mt-3 shadow-md hover:-translate-y-0.5"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Demo Request'}
                      <i className="fa-solid fa-circle-chevron-right text-[10px]"></i>
                    </button>
                  </form>
                ) : (
                  <div className={styles.success}>
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Demo Request Sent!</h3>
                    <p>
                      Thank you for your inquiry, <strong>{submittedName}</strong>.
                    </p>
                    <p>
                      Our solutions engineer has logged your request for the <strong>{submittedProduct}</strong> track. We will email or call you at <strong>{submittedEmail}</strong> within 24 working hours to configure and demonstrate your testing environment.
                    </p>
                    <button
                      className="btnCustom btnOutlineGold mt-4"
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
