export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-label="Nguyễn Đình Khôi Nguyên">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="1" y="1" width="46" height="46" rx="14" className="brand-mark__frame" />
        <path d="M10 27h5l3-9 5 17 4-12 3 7 3-4h5" className="brand-mark__wave" />
        <circle cx="36" cy="14" r="3" className="brand-mark__dot" />
      </svg>
      {!compact && (
        <span className="brand-mark__text">
          <strong>Khôi Nguyên</strong>
          <small>Digital Portfolio</small>
        </span>
      )}
    </span>
  );
}
