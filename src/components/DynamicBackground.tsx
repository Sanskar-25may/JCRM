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
  'Accounting ERP', 'E-Commerce', 'SaaS', 'API Gateway', 'Placement 100%'
];

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: Particle[] = [];
    const maxParticles = 60;

    const createParticle = (initRandom = false): Particle => {
      const size = Math.random() * 2 + 1.5;
      const isText = Math.random() > 0.58;
      return {
        x: Math.random() * width,
        y: initRandom ? Math.random() * height : height + 30,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.45 + 0.15), // Smooth upward float
        size: isText ? Math.random() * 3 + 11.5 : size,
        color: '',
        text: isText ? JCRM_KEYWORDS[Math.floor(Math.random() * JCRM_KEYWORDS.length)] : undefined,
        alpha: isText ? Math.random() * 0.35 + 0.15 : Math.random() * 0.45 + 0.1,
      };
    };

    // Initialize particle array
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // JCRM Theme Particle Palette (Royal Blue, Azure Cyan, Soft Amber, Indigo)
      const particleColors = ['#0055e5', '#38bdf8', '#f59e0b', '#6366f1'];

      ctx.globalCompositeOperation = 'source-over';

      // 1. Soft Ambient Radial Gradient Blobs
      // Blob 1 - JCRM Royal Blue Top Right
      const grad1 = ctx.createRadialGradient(width * 0.85, height * 0.15, 0, width * 0.85, height * 0.15, Math.max(width, height) * 0.4);
      grad1.addColorStop(0, 'rgba(0, 85, 229, 0.07)');
      grad1.addColorStop(1, 'rgba(250, 249, 247, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Blob 2 - Azure Cyan Bottom Left
      const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.8, 0, width * 0.15, height * 0.8, Math.max(width, height) * 0.4);
      grad2.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
      grad2.addColorStop(1, 'rgba(250, 249, 247, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw & animate floating text keywords and particle nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Reset off-screen particles to the bottom
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
          ctx.fillStyle = p.color;
          ctx.font = `600 ${p.size}px 'JetBrains Mono', 'Space Grotesk', monospace`;
          ctx.fillText(p.text, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Floating Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -2,
          backgroundColor: '#faf9f7',
        }}
      />
      {/* Radial Gradient Filter Overlay Layer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -1,
          background:
            'radial-gradient(circle at 85% 15%, rgba(0, 85, 229, 0.06) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.06) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 70%)',
        }}
      />
    </>
  );
}
