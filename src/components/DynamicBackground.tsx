'use client';

import React, { useEffect, useRef, useState } from 'react';

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

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Fixed to light mode only as per user request
  const isDark = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const codeKeywords = [
      'Next.js', 'React', 'TypeScript', 'ERP Solutions', 'LMS Portal', 'HRMS',
      'Python', 'PostgreSQL', 'Docker', 'GitHub', 'CI/CD', 'AWS', 
      'Hospital ERP', 'School LMS', 'Custom Dev', 'SQL', 'Cloud', 'SaaS', 'API Gateway'
    ];

    let particles: Particle[] = [];
    const maxParticles = 65;

    const createParticle = (initRandom = false): Particle => {
      const size = Math.random() * 2 + 1;
      // 40% keyword terms, 60% standard particles
      const isText = Math.random() > 0.60;
      return {
        x: Math.random() * width,
        y: initRandom ? Math.random() * height : height + 20,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.5 + 0.1), // Float upwards slowly
        size: isText ? Math.random() * 3 + 11 : size, // Crisp, readable font sizes
        color: '',
        text: isText ? codeKeywords[Math.floor(Math.random() * codeKeywords.length)] : undefined,
        alpha: isText ? Math.random() * 0.4 + 0.15 : Math.random() * 0.5 + 0.1,
      };
    };

    // Initialize particles
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

      // ── THEME COLORS SWITCH ──
      // Dark Mode Palette: Cyber terminal (Neon Greens, Glowing Cyans, Deep Purples)
      // Light Mode Palette: Warm editorial (Warm Amber, Peach, Lavender, Soft Lilac)
      // Bright color palette for light mode (yellow, orange, green, red)
      const particleColors = ['#ffcc00', '#ff6600', '#00ff99', '#ff3366'];

      // Set canvas composition
      ctx.globalCompositeOperation = 'source-over';

      // 1. Draw large blurry gradient blobs in background (combining CSS blur feel + Canvas speed)
      if (isDark) {
        // Blob 1 - Deep violet top right
        const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 0, width * 0.8, height * 0.2, Math.max(width, height) * 0.35);
        grad1.addColorStop(0, 'rgba(124, 58, 237, 0.12)');
        grad1.addColorStop(1, 'rgba(8, 10, 15, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        // Blob 2 - Cyan bottom left
        const grad2 = ctx.createRadialGradient(width * 0.2, height * 0.8, 0, width * 0.2, height * 0.8, Math.max(width, height) * 0.35);
        grad2.addColorStop(0, 'rgba(88, 230, 217, 0.08)');
        grad2.addColorStop(1, 'rgba(8, 10, 15, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Light theme blobs - warm amber & lavender
        // Blob 1 - Warm Amber top right
        const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.15, 0, width * 0.8, height * 0.15, Math.max(width, height) * 0.4);
        grad1.addColorStop(0, 'rgba(217, 119, 6, 0.06)');
        grad1.addColorStop(1, 'rgba(250, 249, 247, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        // Blob 2 - Lilac bottom left
        const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.8, 0, width * 0.15, height * 0.8, Math.max(width, height) * 0.4);
        grad2.addColorStop(0, 'rgba(0, 102, 255, 0.06)');
        grad2.addColorStop(1, 'rgba(250, 249, 247, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw & animate particles/floating code snippets
      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // If particle moves off-screen, reset to bottom
        if (p.y < -30 || p.x < -30 || p.x > width + 30) {
          particles[idx] = createParticle(false);
          return;
        }

        // Apply theme color
        if (!p.color) {
          p.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;

        if (p.text) {
          // Draw floating code text
          ctx.fillStyle = p.color;
          ctx.font = `500 ${p.size}px monospace`;
          ctx.fillText(p.text, p.x, p.y);
        } else {
          // Draw circular particle node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = isDark ? 10 : 0;
          ctx.shadowColor = p.color;
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
  }, [isDark]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -2,
          background: 'var(--bg-base)',
          transition: 'background-color 0.5s ease',
        }}
      />
      {/* Color Gradient Filter Overlay Layer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
          transition: 'background 0.5s ease',
          background: isDark
            ? 'radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(88, 230, 217, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)',
        }}
      />
    </>
  );
}
