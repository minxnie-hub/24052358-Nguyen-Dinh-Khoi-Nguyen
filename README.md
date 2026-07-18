# Nguyễn Đình Khôi Nguyên — Digital Portfolio

Portfolio học phần **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo**.

- Sinh viên: Nguyễn Đình Khôi Nguyên
- Mã sinh viên: 24052358
- Ngành: Tài chính – Ngân hàng
- Trường: Đại học Kinh tế – ĐHQGHN (UEB)
- Mã học phần: VNU1001_E252046

## Công nghệ

- Next.js 16 + TypeScript
- Tailwind CSS + hệ thống CSS tùy biến
- Static Export để deploy GitHub Pages
- Responsive, keyboard accessible, hỗ trợ `prefers-reduced-motion`

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Build production

```bash
npm run build
```

Thư mục website tĩnh được tạo tại `out/`.

## Deploy GitHub Pages

1. Tạo repository với tên gợi ý: `24052358-Nguyen-Dinh-Khoi-Nguyen`.
2. Đẩy toàn bộ source lên nhánh `main`.
3. Vào **Settings → Pages → Source**, chọn **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy.

Workflow tự nhận biết base path của repository nên website chạy được cả ở repository thường và repository dạng `<username>.github.io`.

## Lưu ý khi deploy

`package-lock.json` đã dùng URL chính thức của npm (`registry.npmjs.org`). Workflow GitHub Actions sử dụng Node.js 22, chạy lần lượt `npm ci`, kiểm tra TypeScript và xuất website tĩnh vào thư mục `out`.
