'use client';

import React, { useState } from 'react';
import styles from './TestimonialsSection.module.css';

interface VideoReview {
  id: string;
  title: string;
  author: string;
  role: string;
  thumbUrl: string;
  embedUrl: string;
}

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<'text' | 'video'>('text');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const textTestimonials = [
    {
      id: 1,
      quote:
        '“JCRM’s ERP system unified our branch offices seamlessly. Our logistics, billing, and HR are now automated in a single cloud dashboard.”',
      author: 'Raghav Mishra',
      role: 'Operations Director, V-Logistics',
      rating: 5,
    },
    {
      id: 2,
      quote:
        '“The job-oriented DevOps internship at JCRM Technologies was exactly what I needed. Working on real-world projects and AWS pipelines gave me the confidence to secure my first position.”',
      author: 'Shwati Singh',
      role: 'Trainee, placed at Wipro',
      rating: 5,
    },
    {
      id: 3,
      quote:
        '“Transparent delivery, modern scalable software stack, and excellent 24/7 technical support. JCRM is our long-term technology partner.”',
      author: 'Satyam Upadhyay',
      role: 'CEO, HealthCare Solutions',
      rating: 5,
    },
    {
      id: 4,
      quote:
        '“The practical 1-on-1 mentorship and live project exposure helped me crack my full-stack interview effortlessly. Best learning experience!”',
      author: 'Adityaraj Dwivedi',
      role: 'Full Stack Engineer, placed at Tech Solutions',
      rating: 5,
    },
  ];

  const videoReviews: VideoReview[] = [
    {
      id: 'v-1',
      title: 'How JCRM ERP Streamlined Our Operations',
      author: 'Raghav Mishra',
      role: 'Operations Director',
      thumbUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1782721421/jcrm/profile/xwi5bw1s4xsnnt1uttf0.jpg',
      embedUrl: 'https://www.youtube.com/embed/AHzgyPR-Cy4?autoplay=1',
    },
    {
      id: 'v-2',
      title: 'From Internship Trainee to Full Stack Developer',
      author: 'Adityaraj Dwivedi',
      role: 'Full Stack Engineer',
      thumbUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1782722321/jcrm/profile/lfqcp7b7ersuto8ird3m.jpg',
      embedUrl: 'https://www.youtube.com/embed/AHzgyPR-Cy4?autoplay=1',
    },
    {
      id: 'v-3',
      title: 'My Career Journey with JCRM Technologies',
      author: 'Vanshika Srivastava',
      role: 'Python Developer',
      thumbUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
      embedUrl: 'https://www.youtube.com/embed/AHzgyPR-Cy4?autoplay=1',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? textTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === textTestimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = textTestimonials[currentIndex];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Golden Glassmorphism Section Pane */}
        <div className={styles.goldenGlassPane}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>What Clients & Trainees Say</h2>
            <p className={styles.subtitle}>
              Real feedback & video reviews from our valued enterprise clients and successfully placed trainees.
            </p>
          </div>

          {/* Dual Mode Switcher Tabs */}
          <div className={styles.tabGroup}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'text' ? styles.active : ''}`}
              onClick={() => setActiveTab('text')}
            >
              <i className="fa-solid fa-quote-left" />
              <span>Text Reviews</span>
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'video' ? styles.active : ''}`}
              onClick={() => setActiveTab('video')}
            >
              <i className="fa-solid fa-circle-play" />
              <span>Video Testimonials</span>
            </button>
          </div>

          {/* Mode 1: Interactive Text Slider */}
          {activeTab === 'text' && (
            <div className={styles.sliderCard}>
              <button
                className={styles.navBtn}
                onClick={handlePrev}
                aria-label="Previous Testimonial"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>

              <div className={styles.quoteContent}>
                <div className={styles.stars}>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" />
                  ))}
                </div>
                <p className={styles.quoteText}>{currentTestimonial.quote}</p>
                <div className={styles.authorName}>— {currentTestimonial.author}</div>
                <div className={styles.authorRole}>{currentTestimonial.role}</div>
              </div>

              <button
                className={styles.navBtn}
                onClick={handleNext}
                aria-label="Next Testimonial"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          )}

          {/* Mode 2: Video Testimonials Grid */}
          {activeTab === 'video' && (
            <div className={styles.videoGrid}>
              {videoReviews.map((video) => (
                <div
                  key={video.id}
                  className={styles.videoCard}
                  onClick={() => setActiveVideoUrl(video.embedUrl)}
                >
                  <div className={styles.videoThumbBox}>
                    <img
                      src={video.thumbUrl}
                      alt={video.title}
                      className={styles.videoThumbImg}
                    />
                    <div className={styles.playOverlay}>
                      <div className={styles.playBtnIcon}>
                        <i className="fa-solid fa-play" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.videoInfo}>
                    <h3 className={styles.videoTitle}>{video.title}</h3>
                    <p className={styles.videoDesc}>
                      {video.author} • {video.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Video Player Modal */}
      {activeVideoUrl && (
        <div className={styles.modalBackdrop} onClick={() => setActiveVideoUrl(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeModalBtn}
              onClick={() => setActiveVideoUrl(null)}
              aria-label="Close video"
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <iframe
              src={activeVideoUrl}
              className={styles.videoIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Testimonial Video Player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
