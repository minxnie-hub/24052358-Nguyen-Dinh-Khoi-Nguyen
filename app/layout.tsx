import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nguyễn Đình Khôi Nguyên | Digital Portfolio",
    template: "%s | Khôi Nguyên Portfolio",
  },
  description: "Portfolio học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo của Nguyễn Đình Khôi Nguyên.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
