'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mockCandidates, mockErpProducts, mockTestimonials, mockCourses } from '@/data/mockData';
import CandidateSlider from '@/components/CandidateSlider';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'erp' | 'training'>('erp');

  // Stats Counters
  const [deployments, setDeployments] = useState(1);
  const [modules, setModules] = useState(1);

  const techStack = ['Python', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Terraform', 'Django', 'FastAPI', 'Git'];
  const partners = ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Razorpay', 'Accenture', 'Cognizant'];

  const prepareItems = (list: string[]) => {
    let repeated = [...list];
    while (repeated.length < 30) {
      repeated = [...repeated, ...list];
    }
    return repeated;
  };

  const preparedStack = prepareItems(techStack);
  const preparedPartners = prepareItems(partners);

  useEffect(() => {
    const depTimer = setInterval(() => {
      setDeployments((prev) => {
        if (prev >= 50) {
          clearInterval(depTimer);
          return 50;
        }
        return prev + 1;
      });
    }, 20);

    const modTimer = setInterval(() => {
      setModules((prev) => {
        if (prev >= 10) {
          clearInterval(modTimer);
          return 10;
        }
        return prev + 1;
      });
    }, 80);

    return () => {
      clearInterval(depTimer);
      clearInterval(modTimer);
    };
  }, []);

  return (
    <div className={`${styles.homepage} dot-grid`}>
      {/* ── HERO SECTION — Full-screen cinematic centered layout ── */}
      <section className={styles.hero}>
        <div className={styles.heroCenter}>

          {/* Live Badge */}
          <div className={styles.liveBadge}>
            <span className="pulse-dot" />
            Enterprise ERP &amp; Developer Training Hub — Now Enrolling
          </div>

          {/* Giant Headline */}
          <h1 className={styles.heroTitle}>
            Build Smarter.<br />
            <span className="shimmer-text">Deploy Faster.</span>
          </h1>

          <p className={styles.heroSubtext}>
            Modern ERP software solutions and job-oriented developer training — designed for the next generation of Indian engineers and enterprises.
          </p>

          {/* CTA Buttons */}
          <div className={styles.heroCtas}>
            <Link href="/erp-solutions" className="btnCustom btnGold">
              <i className="fa-solid fa-server me-2"></i>Explore ERP Solutions
            </Link>
            <Link href="/courses" className="btnCustom btnOutlineGold">
              <i className="fa-solid fa-graduation-cap me-2"></i>Browse Courses
            </Link>
            <a
              href="https://wa.me/917355259488?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20JCRM%20Technologies."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroWhatsapp}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Social Proof Row */}
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/80?img=${i + 10}`}
                  alt={`Student ${i}`}
                  className={styles.avatar}
                  loading="lazy"
                />
              ))}
            </div>
            <div className={styles.proofText}>
              <span className={styles.stars}>★★★★★</span>
              <p>Trusted by <strong>10,000+</strong> students &amp; enterprises across India</p>
            </div>
          </div>

          {/* Floating Stats Chips */}
          <div className={styles.heroChips}>
            <div className={styles.chip}>
              <i className="fa-solid fa-briefcase" style={{ color: '#0066ff' }}></i>
              <span>96% Placement Rate</span>
            </div>
            <div className={styles.chip}>
              <i className="fa-solid fa-server" style={{ color: '#ffb700' }}></i>
              <span>50+ ERP Deployments</span>
            </div>
            <div className={styles.chip}>
              <i className="fa-solid fa-star" style={{ color: '#10b981' }}></i>
              <span>4.9★ Mentor Rating</span>
            </div>
            <div className={styles.chip}>
              <i className="fa-solid fa-headset" style={{ color: '#00d2ff' }}></i>
              <span>24×7 Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Strip */}
      <section className={styles.trustStrip}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h2 className={styles.statNumber}>{deployments}+</h2>
              <p className={styles.statLabel}>ERP Deployments</p>
            </div>
            <div className={styles.statCard}>
              <h2 className={styles.statNumber}>{modules}+</h2>
              <p className={styles.statLabel}>Industry Modules</p>
            </div>
            <div className={styles.statCard}>
              <h2 className={styles.statNumber}>99%</h2>
              <p className={styles.statLabel}>Client Satisfaction</p>
            </div>
            <div className={styles.statCard}>
              <h2 className={styles.statNumber}>24×7</h2>
              <p className={styles.statLabel}>Technical Support</p>
            </div>
          </div>
        </div>
      </section>


      {/* Marquee Tech & Partners Banners */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTitle}>Enterprise Tech Stack</div>
            <div className="overflow-hidden relative w-full flex">
              <div className="marquee-track flex items-center">
                <div className="flex items-center gap-12 pr-12 flex-shrink-0">
                  {preparedStack.map((item, idx) => (
                    <span key={idx} className="text-sm font-bold mono-font flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>•</span> {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-12 pr-12 flex-shrink-0">
                  {preparedStack.map((item, idx) => (
                    <span key={idx + 100} className="text-sm font-bold mono-font flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>•</span> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.marqueeRow} style={{ marginTop: '20px' }}>
            <div className={styles.marqueeTitle}>Our Placements & Partners</div>
            <div className="overflow-hidden relative w-full flex">
              <div className="marquee-track-reverse flex items-center">
                <div className="flex items-center gap-12 pr-12 flex-shrink-0">
                  {preparedPartners.map((item, idx) => (
                    <span key={idx} className="text-sm font-bold mono-font flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--accent-amber)' }}>•</span> {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-12 pr-12 flex-shrink-0">
                  {preparedPartners.map((item, idx) => (
                    <span key={idx + 100} className="text-sm font-bold mono-font flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--accent-amber)' }}>•</span> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Split Toggle */}
      <section className={styles.exploreSection}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <span className={styles.sectionBadge}>EXPLORE JCRM</span>
            <h2 className={styles.sectionTitle}>What Are You Looking For?</h2>
            <p className={styles.sectionSubtitle}>
              Select your path below to explore our enterprise solutions or our professional training programs.
            </p>
            
            <div className={styles.tabToggle}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'erp' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('erp')}
              >
                <i className="fa-solid fa-server me-2"></i> Enterprise ERP Systems
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'training' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('training')}
              >
                <i className="fa-solid fa-laptop-code me-2"></i> Internship &amp; Training
              </button>
            </div>
          </div>

          {/* ERP Products View */}
          {activeTab === 'erp' && (
            <div className={`${styles.tabContent} reveal`}>
              <div className={styles.productsGrid}>
                {mockErpProducts.map((product) => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.cardBadge}>{product.badge}</span>
                      <div className={styles.productIcon}>
                        <i className={`fa-solid ${product.icon}`}></i>
                      </div>
                    </div>
                    <h4 className={styles.productName}>{product.name}</h4>
                    <p className={styles.productDesc}>{product.description}</p>
                    <ul className={styles.productFeatures}>
                      {product.features?.slice(0, 3).map((feat, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check me-2"></i> {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/erp-solutions#${product.id}`} className={styles.cardLink}>
                      Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </Link>
                  </div>
                ))}
              </div>
              <div className={styles.actionRow}>
                <Link href="/erp-solutions" className="btnCustom btnGold">
                  View All ERP Products
                </Link>
              </div>
            </div>
          )}

          {/* Training View */}
          {activeTab === 'training' && (
            <div className={`${styles.tabContent} reveal`}>
              <div className={styles.coursesGrid}>
                {mockCourses.slice(0, 8).map((course) => (
                  <div key={course.id} className={styles.courseCard}>
                    <div className={styles.courseHeader}>
                      <span className={styles.courseIcon}>{course.icon}</span>
                      {course.badge && <span className={styles.courseBadge}>{course.badge}</span>}
                    </div>
                    <h4 className={styles.courseName}>{course.title}</h4>
                    <p className={styles.courseDesc}>{course.description}</p>
                    <div className={styles.courseFooter}>
                      <span className={styles.duration}>
                        <i className="fa-solid fa-clock me-1"></i> {course.duration || '3 Months'}
                      </span>
                      <Link href={`/courses/${course.id}`} className={styles.courseBtn}>
                        Explore <i className="fa-solid fa-circle-chevron-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.actionRow}>
                <Link href="/courses" className="btnCustom btnGold">
                  Browse All Courses
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={`${styles.whyLeft} reveal`}>
              <span className={styles.sectionBadge}>THE JCRM ADVANTAGE</span>
              <h2 className={styles.whyTitle}>Why Choose JCRM Technologies</h2>
              <p className={styles.whyDesc}>
                We combine industry-leading software deployments with high-impact professional mentorship. Whether you are looking to automate your enterprise or scale your career, we provide the platform to succeed.
              </p>
              <ul className={styles.checklist}>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>100% Practical &amp; Job-Oriented Training</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Hands-on Guidance &amp; Real Live Projects</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Dedicated Placements &amp; Industry HR Connections</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Scalable, Secure &amp; Modern ERP Core Architecture</span>
                </li>
              </ul>
            </div>
            
            <div className={`${styles.whyRight} reveal delay-1`}>
              <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                  <i className="fa-solid fa-shield-halved"></i>
                  <h5>Secure System</h5>
                  <p>Role-based access controls and absolute audit logs.</p>
                </div>
                <div className={styles.metricCard}>
                  <i className="fa-solid fa-cloud"></i>
                  <h5>Cloud Ready</h5>
                  <p>Flexible cloud options for zero-latency operations.</p>
                </div>
                <div className={styles.metricCard}>
                  <i className="fa-solid fa-chart-pie"></i>
                  <h5>Analytics Dashboard</h5>
                  <p>Real-time visual dashboards and analytics reporting.</p>
                </div>
                <div className={styles.metricCard}>
                  <i className="fa-solid fa-handshake"></i>
                  <h5>Partnership</h5>
                  <p>Ongoing maintenance and lifelong career mentorship.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className={styles.placementsSection}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <span className={styles.sectionBadge}>SUCCESS STORIES</span>
            <h2 className={styles.sectionTitle}>Successfully Placed Candidates</h2>
            <p className={styles.sectionSubtitle}>
              Our trainees are working at top technology companies in India and globally.
            </p>
          </div>
          
          <div className={styles.sliderRow}>
            <CandidateSlider candidates={mockCandidates} />
          </div>
        </div>
      </section>

      {/* Join Talent Network & Quote CTA */}
      <section className={styles.talentSection}>
        <div className={styles.container}>
          <div className={styles.talentGrid}>
            <div className={`${styles.talentLeft} reveal`}>
              <h2 className={styles.talentTitle}>Join Our IT Talent Network</h2>
              <p className={styles.talentText}>
                Are you looking to kickstart your career? Join JCRM Technologies to work on live project deployments, collaborate with experienced industry architects, and access placement support.
              </p>
              <div className={styles.talentSteps}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>1</span>
                  <p>Choose your course path or submit your CV</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>2</span>
                  <p>Attend intensive project classes and mock rounds</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>3</span>
                  <p>Get interviewed and placed with our hiring partners</p>
                </div>
              </div>
              <div className={styles.talentButtons}>
                <Link href="/join-us" className="btnCustom btnGold">
                  Apply Now
                </Link>
                <a href="https://www.linkedin.com/company/jcrm-technologies-private-limited/" target="_blank" rel="noopener noreferrer" className="btnCustom btnOutlineGold">
                  <i className="fab fa-linkedin me-2"></i> LinkedIn Connect
                </a>
              </div>
            </div>
            
            <div className={`${styles.talentRight} reveal delay-1`}>
              <div className={styles.quoteCard}>
                <i className="fa-solid fa-quote-left"></i>
                <blockquote className={styles.blockquote}>
                  “Alone we can do so little; together we can do so much.”
                </blockquote>
                <cite className={styles.cite}>— Helen Keller</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client & Trainee Testimonial Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <span className={styles.sectionBadge}>TESTIMONIALS</span>
            <h2 className={styles.sectionTitle}>What People Say About Us</h2>
          </div>
          
          <div className={styles.testimonialsGrid}>
            {mockTestimonials.map((t) => (
              <div key={t.id} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className={styles.quoteText}>{t.quote}</p>
                <div className={styles.authorInfo}>
                  <h6 className={styles.authorName}>{t.author}</h6>
                  {t.role && <p className={styles.authorRole}>{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Operations?</h2>
            <p className={styles.ctaText}>
              Schedule a free custom demo with our solutions engineer today and discover how JCRM ERP can optimize your organization.
            </p>
            <Link href="/contact-us" className="btnCustom btnGold">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
