'use client';

import React, { useEffect, useRef } from 'react';

// JCRM Technologies Logo Brand Palette:
// Electric Royal Blue: rgb(0, 85, 229)
// Vibrant Sky Cyan: rgb(56, 189, 248)
// JCRM Amber Gold: rgb(245, 158, 11)

interface RGB {
  r: number;
  g: number;
  b: number;
}

const JCRM_BRAND_COLORS: RGB[] = [
  { r: 0, g: 85, b: 229 },    // Electric Royal Blue (#0055e5)
  { r: 56, g: 189, b: 248 },  // Vibrant Sky Cyan (#38bdf8)
  { r: 245, g: 158, b: 11 },   // JCRM Amber Gold (#f59e0b)
  { r: 0, g: 85, b: 229 },    // Seamless Loop back to Royal Blue
];

function getJCRMBrandColor(factor: number): RGB {
  const normalized = Math.max(0, Math.min(1, factor));
  const scaled = normalized * (JCRM_BRAND_COLORS.length - 1);
  const idx = Math.floor(scaled);
  const nextIdx = Math.min(idx + 1, JCRM_BRAND_COLORS.length - 1);
  const t = scaled - idx;

  const c1 = JCRM_BRAND_COLORS[idx];
  const c2 = JCRM_BRAND_COLORS[nextIdx];

  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t),
  };
}

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
      colorFactor: number;
    }

    let dots: Dot[] = [];
    const spacing = 44; // Clean grid spacing
    const baseRadius = 4.5; // Bigger dot radius
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
          const colorFactor = ((x / width) * 0.5 + (y / height) * 0.5) % 1;
          dots.push({
            ox: x,
            oy: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            colorFactor,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cursor spotlight in JCRM Blue & Gold
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius * 1.3
        );
        spotGrad.addColorStop(0, 'rgba(0, 85, 229, 0.10)');
        spotGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.05)');
        spotGrad.addColorStop(0.85, 'rgba(245, 158, 11, 0.02)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius * 1.3, 0, Math.PI * 2);
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

          // Physics displacement
          const targetX = dot.ox - Math.cos(angle) * force * 38;
          const targetY = dot.oy - Math.sin(angle) * force * 38;

          dot.vx += (targetX - dot.x) * 0.12;
          dot.vy += (targetY - dot.y) * 0.12;

          // Scale up dot radius on hover
          currentRadius = baseRadius + force * 5.0;

          // Calculate JCRM brand color gradient based on position and angle
          const angleNorm = (angle + Math.PI) / (2 * Math.PI);
          const combinedFactor = (dot.colorFactor * 0.4 + angleNorm * 0.6) % 1;
          const rgb = getJCRMBrandColor(combinedFactor);

          const alpha = 0.65 + force * 0.35;
          fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
          shadowBlur = 18 * force;
          shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${force * 0.85})`;
        } else {
          // Spring force return to grid origin
          dot.vx += (dot.ox - dot.x) * 0.07;
          dot.vy += (dot.oy - dot.y) * 0.07;
        }

        // Damping friction
        dot.vx *= 0.78;
        dot.vy *= 0.78;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Render main dot with JCRM theme glow
        ctx.save();
        if (shadowBlur > 0) {
          ctx.shadowBlur = shadowBlur;
          ctx.shadowColor = shadowColor;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // Luminous inner core on hover
        if (dist < mouseRadius * 0.65) {
          const coreForce = 1 - dist / (mouseRadius * 0.65);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, Math.max(1.5, currentRadius * 0.45), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${coreForce * 0.9})`;
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
