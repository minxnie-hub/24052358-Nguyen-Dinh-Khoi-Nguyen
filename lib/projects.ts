export type ProjectMeta = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  tags: string[];
  cover: string;
  accent: string;
  skills: string[];
};

export const projects: ProjectMeta[] = [
  {
    slug: "bai-1",
    number: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    eyebrow: "Nền tảng số · macOS",
    summary: "Thực hành trọn quy trình tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin trên macOS.",
    tags: ["Finder", "TextEdit", "File management"],
    cover: "/assets/bai-1/minh-chung-03.webp",
    accent: "cyan",
    skills: ["Quản lý tệp", "Tổ chức thư mục", "Thao tác hệ điều hành"],
  },
  {
    slug: "bai-2",
    number: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    eyebrow: "Nghiên cứu · Tài chính ngân hàng",
    summary: "Phân tích tác động của nguồn thu ngoài lãi đến hiệu quả hoạt động của ngân hàng thương mại.",
    tags: ["Research", "Harvard", "Source evaluation"],
    cover: "/assets/bai-2/ueb-logo.webp",
    accent: "gold",
    skills: ["Tìm kiếm học thuật", "Đánh giá nguồn", "Tổng hợp nghiên cứu"],
  },
  {
    slug: "bai-3",
    number: "03",
    title: "Viết prompt hiệu quả cho các tác vụ",
    eyebrow: "Prompt engineering · AI literacy",
    summary: "Thiết kế, thử nghiệm và so sánh ba cấp độ prompt cho các tác vụ học tập ngành Tài chính – Ngân hàng.",
    tags: ["Role prompting", "Few-shot", "C.L.A.R.O"],
    cover: "/assets/bai-3/minh-chung-11.webp",
    accent: "lime",
    skills: ["Prompt engineering", "Tư duy phản biện", "Đánh giá đầu ra AI"],
  },
  {
    slug: "bai-4",
    number: "04",
    title: "Công cụ hợp tác trực tuyến cho dự án nhóm",
    eyebrow: "Collaboration · Deep Learning",
    summary: "Phối hợp Google Docs, Google Drive và Google Meet trong dự án Deep Learning cho chẩn đoán hình ảnh y tế.",
    tags: ["Google Docs", "Drive", "Meet"],
    cover: "/assets/bai-4/minh-chung-03.webp",
    accent: "blue",
    skills: ["Làm việc nhóm", "Quản lý tài nguyên", "Thuyết trình"],
  },
  {
    slug: "bai-5",
    number: "05",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    eyebrow: "Creative AI · Education",
    summary: "Kết hợp AI tạo văn bản, hình ảnh và thiết kế để xây dựng nội dung đa phương tiện về AI trong giáo dục.",
    tags: ["ChatGPT", "DALL·E", "Canva AI"],
    cover: "/assets/bai-5/minh-chung-01.webp",
    accent: "orange",
    skills: ["Sáng tạo nội dung", "Tích hợp công cụ", "Human-in-the-loop"],
  },
  {
    slug: "bai-6",
    number: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    eyebrow: "AI ethics · Academic integrity",
    summary: "Xây dựng nguyên tắc cá nhân về minh bạch, kiểm chứng và liêm chính học thuật khi sử dụng AI.",
    tags: ["Ethics", "Transparency", "Fact-check"],
    cover: "/assets/bai-6/infographic-ai-co-trach-nhiem.webp",
    accent: "red",
    skills: ["Đạo đức AI", "Trích dẫn minh bạch", "Kiểm chứng thông tin"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
