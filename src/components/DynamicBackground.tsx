'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  text?: string;
  alpha: number;
}

const JCRM_KEYWORDS = [
  'JCRM Technologies', 'ERP Solutions', 'LMS Portal', 'HRMS Suite',
  'Hospital ERP', 'Next.js', 'React', 'TypeScript', 'Python',
  'PostgreSQL', 'Docker', 'AWS Cloud', 'AI & ML', 'CyberSecurity',
  'Accounting ERP', 'E-Commerce', 'SaaS', 'API Gateway', '100% Placement',
  'DevOps', 'Rest API', 'Cloud Native', 'Node.js', 'Spring Boot', 'Tailwind',
  'Enterprise Software', 'Data Analytics', 'Smart Automation', 'IT Training'
];

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    let particles: Particle[] = [];
    const maxParticles = 120; // Increased density of floating text & nodes

    const createParticle = (initRandom = false): Particle => {
      const size = Math.random() * 2.5 + 2.0;
      const isText = Math.random() > 0.50; // 50% text, 50% node particles
      return {
        x: Math.random() * width,
        y: initRandom ? Math.random() * height : height + 30,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.5 + 0.2), // Upward float
        size: isText ? Math.floor(Math.random() * 3 + 12) : size,
        color: '',
        text: isText ? JCRM_KEYWORDS[Math.floor(Math.random() * JCRM_KEYWORDS.length)] : undefined,
        alpha: isText ? Math.random() * 0.35 + 0.60 : Math.random() * 0.45 + 0.40, // High opacity for sharp text
      };
    };

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;

      // High-DPI Scaling for Ultra-Sharp Canvas Text
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(ratio, ratio);

      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(createParticle(true));
      }
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Bright JCRM Palette (Royal Blue, Sky Cyan, Vibrant Amber, Deep Violet)
      const particleColors = ['#0055e5', '#0284c7', '#d97706', '#4f46e5', '#2563eb'];

      ctx.globalCompositeOperation = 'source-over';

      // 1. Bright & Vibrant Background Gradient Blobs
      // Blob 1 - Electric Royal Blue Top Right
      const grad1 = ctx.createRadialGradient(width * 0.82, height * 0.18, 0, width * 0.82, height * 0.18, Math.max(width, height) * 0.45);
      grad1.addColorStop(0, 'rgba(0, 85, 229, 0.18)');
      grad1.addColorStop(0.5, 'rgba(56, 189, 248, 0.09)');
      grad1.addColorStop(1, 'rgba(240, 244, 255, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Blob 2 - Ocean Cyan / Indigo Bottom Left
      const grad2 = ctx.createRadialGradient(width * 0.18, height * 0.82, 0, width * 0.18, height * 0.82, Math.max(width, height) * 0.45);
      grad2.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
      grad2.addColorStop(0.5, 'rgba(99, 102, 241, 0.10)');
      grad2.addColorStop(1, 'rgba(240, 244, 255, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Blob 3 - Warm Amber Center Glow
      const grad3 = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.35);
      grad3.addColorStop(0, 'rgba(245, 158, 11, 0.10)');
      grad3.addColorStop(1, 'rgba(240, 244, 255, 0)');
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw & animate floating text keywords and particle nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Reset off-screen particles to bottom
        if (p.y < -40 || p.x < -40 || p.x > width + 40) {
          particles[idx] = createParticle(false);
          return;
        }

        if (!p.color) {
          p.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;

        if (p.text) {
          // Sharp High-Contrast Typography
          ctx.fillStyle = p.color;
          ctx.font = `700 ${p.size}px 'Space Grotesk', -apple-system, sans-serif`;
          ctx.textBaseline = 'middle';
          ctx.fillText(p.text, Math.round(p.x), Math.round(p.y));
        } else {
          // Crisp Circular Particle Node
          ctx.beginPath();
          ctx.arc(Math.round(p.x), Math.round(p.y), p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Floating High-DPI Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -2,
          backgroundColor: '#f1f5f9', // Brighter off-white/light-blue background base
        }}
      />
      {/* Vibrant Radial Gradient Overlay Layer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -1,
          background:
            'radial-gradient(circle at 82% 18%, rgba(0, 85, 229, 0.16) 0%, transparent 55%), radial-gradient(circle at 18% 82%, rgba(56, 189, 248, 0.16) 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.10) 0%, transparent 65%), radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
        }}
      />
    </>
  );
}
