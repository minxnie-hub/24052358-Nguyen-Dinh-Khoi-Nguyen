"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/assets";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageGallery({ images, columns = 2 }: { images: GalleryImage[]; columns?: 1 | 2 | 3 }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className={`evidence-grid evidence-grid--${columns}`}>
        {images.map((image, index) => (
          <figure className="evidence-card" key={`${image.src}-${index}`}>
            <button type="button" onClick={() => setActiveIndex(index)} aria-label={`Mở ảnh: ${image.alt}`}>
              <img src={asset(image.src)} alt={image.alt} loading="lazy" />
              <span className="evidence-card__zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="6" />
                  <path d="m16 16 4 4M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Xem ảnh minh chứng">
          <button className="lightbox__backdrop" aria-label="Đóng ảnh" onClick={() => setActiveIndex(null)} />
          <div className="lightbox__content">
            <img src={asset(images[activeIndex].src)} alt={images[activeIndex].alt} />
            <div className="lightbox__footer">
              <span>{images[activeIndex].caption || images[activeIndex].alt}</span>
              <span>{activeIndex + 1} / {images.length}</span>
            </div>
            <button className="lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Đóng">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
            {images.length > 1 && (
              <>
                <button className="lightbox__prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} aria-label="Ảnh trước">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
                </button>
                <button className="lightbox__next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} aria-label="Ảnh sau">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
