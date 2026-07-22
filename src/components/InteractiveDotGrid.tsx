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
      baseHue: number;
    }

    let dots: Dot[] = [];
    const spacing = 44; // Grid spacing
    const baseRadius = 4.5; // Bigger base dot matrix radius
    const mouseRadius = 230; // Interactive hover radius

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
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
          // Modern hue distribution: Cyan -> Indigo -> Violet -> Magenta
          const baseHue = (x / width) * 80 + 190;
          dots.push({
            ox: x,
            oy: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            baseHue,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cursor glow spot
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius * 1.25
        );
        spotGrad.addColorStop(0, 'rgba(99, 102, 241, 0.09)');
        spotGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.04)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius * 1.25, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.ox;
        const dy = mouse.y - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentRadius = baseRadius;
        let fillStyle = 'rgba(148, 163, 184, 0.32)'; // Clean slate base
        let shadowBlur = 0;
        let shadowColor = 'transparent';

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);

          // Physics repulsion effect from Design5
          const targetX = dot.ox - Math.cos(angle) * force * 38;
          const targetY = dot.oy - Math.sin(angle) * force * 38;

          dot.vx += (targetX - dot.x) * 0.12;
          dot.vy += (targetY - dot.y) * 0.12;

          // Bigger dot on hover (up to 9.5px)
          currentRadius = baseRadius + force * 5.0;

          // Colorful yet modern palette (cyan, indigo, violet, rose)
          const dynamicHue = (dot.baseHue + (angle * (180 / Math.PI) + 360) * 0.3) % 360;
          const saturation = 85 + force * 15;
          const lightness = 55 + force * 15;
          const alpha = 0.55 + force * 0.45;

          fillStyle = `hsla(${dynamicHue}, ${saturation}%, ${lightness}%, ${alpha})`;
          shadowBlur = 16 * force;
          shadowColor = `hsla(${dynamicHue}, 90%, 65%, ${force * 0.85})`;
        } else {
          // Spring return to grid origin
          dot.vx += (dot.ox - dot.x) * 0.07;
          dot.vy += (dot.oy - dot.y) * 0.07;
        }

        // Friction damping
        dot.vx *= 0.78;
        dot.vy *= 0.78;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Render main dot with colorful glow
        ctx.save();
        if (shadowBlur > 0) {
          ctx.shadowBlur = shadowBlur;
          ctx.shadowColor = shadowColor;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // Draw luminous inner core on hover
        if (dist < mouseRadius * 0.65) {
          const coreForce = 1 - dist / (mouseRadius * 0.65);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, Math.max(1.5, currentRadius * 0.45), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${coreForce * 0.85})`;
          ctx.fill();
        }
        ctx.restore();
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
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
