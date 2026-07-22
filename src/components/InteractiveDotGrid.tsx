'use client';

import React, { useEffect, useRef } from 'react';

// Exact JCRM Technologies Logo Blue Color Palette:
// Deep Cobalt / Sapphire Blue (Logo core text & ring): rgb(0, 75, 204)
// Royal Azure Blue (Logo accent lines): rgb(26, 115, 232)
// Soft Ice / Periwinkle Blue (Outer logo halo): rgb(147, 197, 253)

interface RGB {
  r: number;
  g: number;
  b: number;
}

const BLUE_INNER: RGB = { r: 0, g: 75, b: 204 };    // Deep Cobalt Blue (Cursor Center)
const BLUE_MID: RGB   = { r: 26, g: 115, b: 232 };  // Royal Azure Blue (Mid Radial)
const BLUE_OUTER: RGB = { r: 147, g: 197, b: 253 }; // Soft Ice Blue (Outer Edge)

function getRadialLogoBlue(normDist: number): RGB {
  // normDist ranges from 0 (center under mouse) to 1 (outer edge of hover radius)
  const clamped = Math.max(0, Math.min(1, normDist));
  
  if (clamped <= 0.45) {
    const t = clamped / 0.45;
    return {
      r: Math.round(BLUE_INNER.r + (BLUE_MID.r - BLUE_INNER.r) * t),
      g: Math.round(BLUE_INNER.g + (BLUE_MID.g - BLUE_INNER.g) * t),
      b: Math.round(BLUE_INNER.b + (BLUE_MID.b - BLUE_INNER.b) * t),
    };
  } else {
    const t = (clamped - 0.45) / 0.55;
    return {
      r: Math.round(BLUE_MID.r + (BLUE_OUTER.r - BLUE_MID.r) * t),
      g: Math.round(BLUE_MID.g + (BLUE_OUTER.g - BLUE_MID.g) * t),
      b: Math.round(BLUE_MID.b + (BLUE_OUTER.b - BLUE_MID.b) * t),
    };
  }
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
    }

    let dots: Dot[] = [];
    const spacing = 44; // Crisp grid spacing
    const baseRadius = 4.5; // Base dot radius
    const mouseRadius = 240; // Radial interaction radius

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
          dots.push({
            ox: x,
            oy: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth radial ambient spotlight in JCRM Logo Blue under cursor
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius * 1.35
        );
        spotGrad.addColorStop(0, 'rgba(0, 75, 204, 0.14)');
        spotGrad.addColorStop(0.45, 'rgba(26, 115, 232, 0.07)');
        spotGrad.addColorStop(0.85, 'rgba(147, 197, 253, 0.02)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius * 1.35, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.ox;
        const dy = mouse.y - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentRadius = baseRadius;
        let fillStyle = 'rgba(148, 163, 184, 0.32)'; // Soft slate base
        let shadowBlur = 0;
        let shadowColor = 'transparent';

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const normDist = dist / mouseRadius; // 0 at center, 1 at edge
          const angle = Math.atan2(dy, dx);

          // Physics repulsion effect from Design5
          const targetX = dot.ox - Math.cos(angle) * force * 38;
          const targetY = dot.oy - Math.sin(angle) * force * 38;

          dot.vx += (targetX - dot.x) * 0.12;
          dot.vy += (targetY - dot.y) * 0.12;

          // Enlarge dot size on hover (up to 9.5px)
          currentRadius = baseRadius + force * 5.0;

          // Pure Radial Gradient of JCRM Logo Blues
          const rgb = getRadialLogoBlue(normDist);
          const alpha = 0.7 + force * 0.3;

          fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
          shadowBlur = 20 * force;
          shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${force * 0.9})`;
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

        // Render main dot with JCRM logo blue glow
        ctx.save();
        if (shadowBlur > 0) {
          ctx.shadowBlur = shadowBlur;
          ctx.shadowColor = shadowColor;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // Luminous white inner core for dots right under cursor
        if (dist < mouseRadius * 0.6) {
          const coreForce = 1 - dist / (mouseRadius * 0.6);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, Math.max(1.5, currentRadius * 0.45), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${coreForce * 0.95})`;
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
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
