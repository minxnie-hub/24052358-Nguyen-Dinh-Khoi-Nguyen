import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <BrandMark />
          <p>
            Portfolio học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.
          </p>
        </div>
        <div className="site-footer__meta">
          <span>Nguyễn Đình Khôi Nguyên · 24052358</span>
          <span>Tài chính – Ngân hàng · UEB – ĐHQGHN</span>
          <Link href="/">Quay về đầu trang</Link>
        </div>
      </div>
    </footer>
  );
}
