'use client';

import React, { useEffect, useRef } from 'react';

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    interface Dot {
      ox: number;
      oy: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      hueOffset: number;
    }

    let dots: Dot[] = [];
    const spacing = 44; // Distance between grid dots
    const baseRadius = 4; // Enlarged dot matrix base radius
    const mouseRadius = 240; // Interaction radius

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const initDots = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(ratio, ratio);

      dots = [];
      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += spacing) {
          dots.push({
            ox: x,
            oy: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            hueOffset: Math.random() * 60 - 30, // Subtle per-dot color variation
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.ox;
        const dy = mouse.y - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentRadius = baseRadius;
        let fillStyle = 'rgba(0, 85, 229, 0.22)'; // Default subtle blue-gray

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);

          // Elastic physics displacement
          const targetX = dot.ox - Math.cos(angle) * force * 35;
          const targetY = dot.oy - Math.sin(angle) * force * 35;

          dot.vx += (targetX - dot.x) * 0.12;
          dot.vy += (targetY - dot.y) * 0.12;

          // Enlarged radius on hover (grows up to 8.5px)
          currentRadius = baseRadius + force * 4.5;

          // Vibrant multi-color gradient based on cursor angle & distance
          const hue = ((angle * (180 / Math.PI) + 360 + dot.hueOffset) % 360);
          // High saturation and brightness when hovered
          const alpha = 0.4 + force * 0.6;
          fillStyle = `hsla(${hue}, 90%, 52%, ${alpha})`;
        } else {
          // Spring return to original position
          dot.vx += (dot.ox - dot.x) * 0.06;
          dot.vy += (dot.oy - dot.y) * 0.06;
        }

        // Friction / Damping
        dot.vx *= 0.76;
        dot.vy *= 0.76;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // Optional subtle glow halo for hovered dots
        if (dist < mouseRadius * 0.6) {
          const glowForce = 1 - dist / (mouseRadius * 0.6);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, currentRadius + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 102, 255, ${glowForce * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    initDots();
    render();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);
    window.addEventListener('resize', initDots);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('resize', initDots);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
