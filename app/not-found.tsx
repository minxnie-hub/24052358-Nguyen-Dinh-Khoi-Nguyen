import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>Không tìm thấy nội dung</h1>
      <p>Trang bạn mở không tồn tại hoặc đã được di chuyển.</p>
      <Link href="/">Quay về portfolio</Link>
    </main>
  );
}
