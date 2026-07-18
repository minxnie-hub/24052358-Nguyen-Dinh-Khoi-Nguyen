"use client";

import { useEffect, useRef } from "react";

export function Waveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const center = height * 0.53;
      const columns = Math.max(34, Math.floor(width / 12));
      const gap = width / columns;
      const phase = reducedMotion ? 0 : time * 0.0012;

      for (let i = 0; i < columns; i += 1) {
        const x = i * gap + gap * 0.5;
        const normalized = i / columns;
        const envelope = Math.sin(Math.PI * normalized) ** 0.8;
        const signal =
          Math.sin(i * 0.58 + phase * 2.2) * 0.45 +
          Math.sin(i * 0.19 - phase * 1.5) * 0.35 +
          Math.sin(i * 0.08 + phase) * 0.2;
        const magnitude = 12 + Math.abs(signal) * height * 0.34 * envelope;
        const barWidth = Math.max(2, gap * 0.35);
        const gradient = context.createLinearGradient(0, center - magnitude, 0, center + magnitude);
        gradient.addColorStop(0, "rgba(110, 231, 255, 0.9)");
        gradient.addColorStop(0.45, "rgba(202, 255, 86, 0.92)");
        gradient.addColorStop(1, "rgba(245, 181, 73, 0.78)");
        context.fillStyle = gradient;
        context.fillRect(x - barWidth / 2, center - magnitude, barWidth, magnitude * 2);
      }

      context.strokeStyle = "rgba(255,255,255,0.12)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(0, center + 0.5);
      context.lineTo(width, center + 0.5);
      context.stroke();

      if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    draw(0);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      cancelAnimationFrame(animationFrame);
      draw(0);
    };
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="waveform" aria-hidden="true" />;
}
