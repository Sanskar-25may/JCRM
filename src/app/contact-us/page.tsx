'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './contactus.module.css';

function ContactUsContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || searchParams.get('workshop') || 'LMS';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: initialProduct,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
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
    'Job-Oriented IT Training & Placement',
    'Technical Workshop Inquiry',
    'Custom Enterprise Request',
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Outer Section Pane Matching Homepage */}
        <div className={styles.glassPane}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              Contact &amp; <span className={styles.titleHighlight}>Consultation</span>
            </h1>
            <p className={styles.subtitle}>
              Request a custom ERP product demo, inquire about corporate IT training, or connect with our support desk.
            </p>
          </div>

          {/* 2-Column Split Grid */}
          <div className={styles.grid}>
            {/* Left Column: Contact Info Cards & Map */}
            <div className={styles.leftCol}>
              <span className={styles.badge}>GET IN TOUCH</span>
              <h2 className={styles.sectionHeading}>
                Let&apos;s Build Something Smarter Together
              </h2>
              <p className={styles.sectionDesc}>
                Have questions about our enterprise ERP modules or placement assistance tracks? Connect directly with our team through any of our coordinates:
              </p>

              {/* Info Cards Stack with Golden Border Glow */}
              <div className={styles.infoCardsStack}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIconBox}>
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <h3 className={styles.infoTitle}>Corporate HQ</h3>
                    <p className={styles.infoText}>
                      404, 1st Floor, 4th A Cross Rd, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconBox}>
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <h3 className={styles.infoTitle}>HR &amp; Careers Desk</h3>
                    <p className={styles.infoText}>
                      <a href="mailto:hr@jcrm.in">hr@jcrm.in</a> • <a href="mailto:info@jcrm.in">info@jcrm.in</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconBox}>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <h3 className={styles.infoTitle}>Direct Support Helpline</h3>
                    <p className={styles.infoText}>
                      <a href="tel:+918310531309">+91 8310531309</a> (24x7 Technical Desk)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Location Widget */}
              <div className={styles.mapCard}>
                <div className={styles.mapHeader}>
                  <i className="fa-solid fa-map-location-dot" />
                  <span>Bengaluru HQ Location</span>
                </div>
                <div className={styles.mapBody}>
                  <i className={`fa-solid fa-location-pin ${styles.mapPinIcon}`} />
                  <div className={styles.mapPinText}>JCRM Technologies Pvt Ltd</div>
                  <span className={styles.mapCoords}>13.0189° N, 77.6432° E</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Card with Golden Glowing Border */}
            <div className={styles.formCard}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.formTitle}>Request Demo / Quote</h2>
                  <p className={styles.formSubtitle}>
                    Provide your details below. Our solutions architect will reach out within 24 hours to schedule a session.
                  </p>

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
                      className={styles.inputField}
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
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="product">Target Product / Service</label>
                    <select
                      name="product"
                      id="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className={styles.selectField}
                    >
                      {products.map((p) => (
                        <option key={p} value={p.split(' (')[0]}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message / Requirements</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Briefly describe your business operations, user count, or training timeline..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textareaField}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Demo Request</span>
                    <i className="fa-solid fa-paper-plane" />
                  </button>
                </form>
              ) : (
                <div className={styles.successCard}>
                  <i className={`fa-solid fa-circle-check ${styles.successIcon}`} />
                  <h2 className={styles.successTitle}>Request Sent Successfully!</h2>
                  <p className={styles.successText}>
                    Thank you for reaching out, <strong>{formData.name}</strong>.
                    <br />
                    Our solutions engineer has logged your inquiry for <strong>{formData.product}</strong>. We will email or call you at <strong>{formData.email}</strong> within 24 working hours.
                  </p>
                  <button
                    type="button"
                    className={styles.resetBtn}
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
    </div>
  );
}

export default function ContactUs() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
            color: '#0055e5',
            fontWeight: 700,
          }}
        >
          Loading Contact Form...
        </div>
      }
    >
      <ContactUsContent />
    </Suspense>
  );
}
