import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Về trang chủ">
          <BrandMark />
        </Link>
        <nav className="site-nav" aria-label="Điều hướng chính">
          <Link href="/#gioi-thieu">Giới thiệu</Link>
          <Link href="/#bai-tap">Bài tập</Link>
          <Link href="/#tong-ket">Tổng kết</Link>
        </nav>
      </div>
    </header>
  );
}
