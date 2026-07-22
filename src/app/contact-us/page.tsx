'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './contactus.module.css';

function ContactUsContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || 'LMS';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: initialProduct,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
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
                  {/* Since embedding iframe requires specific keys/URLs, we render a beautifully styled vector representation of map pin */}
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
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <h3 className={styles.formTitle}>Request Demo / Quote</h3>
                    <p className={styles.formSubtitle}>Provide your corporate details. Our solutions architect will call you back to schedule a demo session.</p>

                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="john.doe@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="product">Target ERP System / Solution</label>
                      <select
                        name="product"
                        id="product"
                        value={formData.product}
                        onChange={handleInputChange}
                      >
                        {products.map((p) => (
                          <option key={p} value={p.split(' (')[0]}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message / System Requirements</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Briefly describe your business operations, number of users, or customization requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btnCustom btnGold w-100 justify-content-center mt-3">
                      Send Demo Request <i className="fa-solid fa-circle-chevron-right ms-1"></i>
                    </button>
                  </form>
                ) : (
                  <div className={styles.success}>
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Demo Request Sent!</h3>
                    <p>
                      Thank you for your inquiry, <strong>{formData.name}</strong>.
                    </p>
                    <p>
                      Our solutions engineer has logged your request for the <strong>{formData.product}</strong> track. We will email or call you at <strong>{formData.email}</strong> within 24 working hours to configure and demonstrate your testing environment.
                    </p>
                    <button
                      className="btnCustom btnOutlineGold mt-4"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          product: 'LMS',
                          message: '',
                        });
                      }}
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
