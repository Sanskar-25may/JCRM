'use client';

import React, { useEffect, useRef } from 'react';

// JCRM Logo Blue Palette:
// Deep Cobalt Blue (Sphere Center): rgb(0, 75, 204)
// Royal Azure Blue (Sphere Slope): rgb(26, 115, 232)
// Soft Ice Blue (Sphere Edge): rgb(147, 197, 253)

interface RGB {
  r: number;
  g: number;
  b: number;
}

const BLUE_CENTER: RGB = { r: 0, g: 75, b: 204 };   // Deep Cobalt Blue
const BLUE_SLOPE: RGB  = { r: 26, g: 115, b: 232 }; // Royal Azure Blue
const BLUE_EDGE: RGB   = { r: 147, g: 197, b: 253 };// Soft Ice Blue

function getSphereGlowColor(normDist: number): RGB {
  const r = Math.max(0, Math.min(1, normDist));
  if (r <= 0.5) {
    const t = r / 0.5;
    return {
      r: Math.round(BLUE_CENTER.r + (BLUE_SLOPE.r - BLUE_CENTER.r) * t),
      g: Math.round(BLUE_CENTER.g + (BLUE_SLOPE.g - BLUE_CENTER.g) * t),
      b: Math.round(BLUE_CENTER.b + (BLUE_SLOPE.b - BLUE_CENTER.b) * t),
    };
  } else {
    const t = (r - 0.5) / 0.5;
    return {
      r: Math.round(BLUE_SLOPE.r + (BLUE_EDGE.r - BLUE_SLOPE.r) * t),
      g: Math.round(BLUE_SLOPE.g + (BLUE_EDGE.g - BLUE_SLOPE.g) * t),
      b: Math.round(BLUE_SLOPE.b + (BLUE_EDGE.b - BLUE_SLOPE.b) * t),
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
    const spacing = 38; // Dense, refined grid spacing
    const baseRadius = 2.5; // Smaller, crisp dot radius
    const mouseRadius = 140; // Smaller, elegant hover radius

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

      // Render glowing sphere / ball light beneath the blanket of dots
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const ballGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius
        );
        ballGrad.addColorStop(0, 'rgba(0, 75, 204, 0.16)');
        ballGrad.addColorStop(0.5, 'rgba(26, 115, 232, 0.08)');
        ballGrad.addColorStop(0.85, 'rgba(147, 197, 253, 0.03)');
        ballGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ballGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.ox;
        const dy = mouse.y - dot.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentRadius = baseRadius;
        let fillStyle = 'rgba(148, 163, 184, 0.32)'; // Crisp slate base
        let shadowBlur = 0;
        let shadowColor = 'transparent';

        if (dist < mouseRadius) {
          const normDist = dist / mouseRadius; // 0 at center, 1 at edge
          const sphereHeight = Math.sqrt(1 - normDist * normDist); // 3D hemisphere elevation curve
          const angle = Math.atan2(dy, dx);

          // Smooth 3D dome displacement: max lateral movement along sphere slopes (sin(r*pi))
          const lateralPush = Math.sin(normDist * Math.PI) * 16;
          const targetX = dot.ox - Math.cos(angle) * lateralPush;
          const targetY = dot.oy - Math.sin(angle) * lateralPush;

          dot.vx += (targetX - dot.x) * 0.14;
          dot.vy += (targetY - dot.y) * 0.14;

          // Swell dot size smoothly over the top of the sphere (up to 5.5px)
          currentRadius = baseRadius + sphereHeight * 3.2;

          // Glowing JCRM Blue palette based on 3D sphere elevation
          const rgb = getSphereGlowColor(normDist);
          const alpha = 0.55 + sphereHeight * 0.45;

          fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
          shadowBlur = 14 * sphereHeight;
          shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${sphereHeight * 0.9})`;
        } else {
          // Elastic spring return to grid origin
          dot.vx += (dot.ox - dot.x) * 0.08;
          dot.vy += (dot.oy - dot.y) * 0.08;
        }

        // Friction damping
        dot.vx *= 0.76;
        dot.vy *= 0.76;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Render main dot with 3D sphere glow
        ctx.save();
        if (shadowBlur > 0) {
          ctx.shadowBlur = shadowBlur;
          ctx.shadowColor = shadowColor;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // Luminous white core for dots directly on top of the glowing sphere
        if (dist < mouseRadius * 0.5) {
          const normDist = dist / (mouseRadius * 0.5);
          const coreIntensity = 1 - normDist;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, Math.max(1.0, currentRadius * 0.4), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${coreIntensity * 0.95})`;
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
