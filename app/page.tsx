import Link from "next/link";
import { AssetImage } from "@/components/AssetImage";
import { ProjectCard } from "@/components/ProjectCard";
import { Waveform } from "@/components/Waveform";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero__grid" aria-hidden="true" />
        <div className="home-hero__orb home-hero__orb--one" aria-hidden="true" />
        <div className="home-hero__orb home-hero__orb--two" aria-hidden="true" />
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="kicker"><span /> Tài chính · Công nghệ số · Âm nhạc</p>
            <h1 id="hero-title">
              Nguyễn Đình<br />
              <span>Khôi Nguyên</span>
            </h1>
            <p className="home-hero__lead">
              Sinh viên Tài chính – Ngân hàng xây dựng tư duy số bằng dữ liệu, AI và tinh thần sáng tạo của một người đam mê làm nhạc.
            </p>
            <div className="home-hero__actions">
              <Link href="#bai-tap" className="button button--primary">Khám phá 6 bài tập</Link>
              <Link href="#gioi-thieu" className="button button--ghost">Về hành trình của mình</Link>
            </div>
            <div className="home-hero__meta">
              <div><span>Mã sinh viên</span><strong>24052358</strong></div>
              <div><span>Đơn vị</span><strong>UEB · ĐHQGHN</strong></div>
              <div><span>Học phần</span><strong>VNU1001_E252046</strong></div>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="portrait-stage">
              <div className="portrait-stage__label portrait-stage__label--top">DIGITAL SIGNAL / 2026</div>
              <div className="portrait-stage__frame">
                <AssetImage
                  src="/assets/portrait/nguyen-dinh-khoi-nguyen.webp"
                  alt="Chân dung Nguyễn Đình Khôi Nguyên"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-stage__disc" aria-hidden="true"><i /><i /><i /></div>
              <div className="portrait-stage__label portrait-stage__label--bottom">FINANCE × AI × SOUND</div>
            </div>
            <div className="wave-panel">
              <div className="wave-panel__head"><span>Learning waveform</span><small>06 modules</small></div>
              <Waveform />
            </div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div>
            <span>RESEARCH</span><i />
            <span>PROMPT ENGINEERING</span><i />
            <span>COLLABORATION</span><i />
            <span>GENERATIVE AI</span><i />
            <span>ACADEMIC INTEGRITY</span><i />
            <span>RESEARCH</span><i />
            <span>PROMPT ENGINEERING</span><i />
          </div>
        </div>
      </section>

      <section className="about-section" id="gioi-thieu">
        <div className="section-shell about-section__grid">
          <div className="section-index"><span>01</span><small>ABOUT</small></div>
          <div className="about-section__main">
            <p className="section-kicker">Giới thiệu</p>
            <h2>Từ thao tác số đến tư duy ra quyết định.</h2>
            <p className="about-section__lead">
              Em là Nguyễn Đình Khôi Nguyên, sinh viên ngành Tài chính – Ngân hàng tại Trường Đại học Kinh tế – ĐHQGHN.
            </p>
            <div className="about-section__columns">
              <p>
                Trong quá trình học tập, em chú trọng phát triển kỹ năng số nền tảng và tìm hiểu cách ứng dụng công nghệ số, trí tuệ nhân tạo để nâng cao hiệu quả học tập và hỗ trợ phân tích thông tin trong lĩnh vực Tài chính – Ngân hàng.
              </p>
              <p>
                Mục tiêu của em là xây dựng tư duy khai thác, đánh giá thông tin có hệ thống; sử dụng AI như công cụ hỗ trợ nhưng vẫn tuân thủ đạo đức và liêm chính học thuật. Em hướng tới năng lực tự học, tư duy phản biện và khả năng thích ứng với môi trường số.
              </p>
            </div>
          </div>
          <aside className="about-note">
            <span>DESIGN NOTE</span>
            <p>Portfolio kết hợp cấu trúc hiện đại, chuyên nghiệp với tín hiệu âm nhạc và ngôn ngữ thị giác công nghệ số.</p>
            <div className="about-note__meter"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </aside>
        </div>
      </section>

      <section className="project-section" id="bai-tap">
        <div className="section-shell">
          <div className="project-section__head">
            <div className="section-index"><span>02</span><small>PROJECTS</small></div>
            <div>
              <p className="section-kicker">Hồ sơ học tập</p>
              <h2>06 bài tập, một lộ trình năng lực số.</h2>
            </div>
            <p>
              Trang chủ chỉ hiển thị bản xem trước. Mỗi bài tập được tách thành một trang riêng, trình bày nội dung, bảng biểu và ảnh minh chứng theo đúng trình tự trong báo cáo.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0 || index === 4} />
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-shell journey-section__grid">
          <div className="section-index section-index--light"><span>03</span><small>JOURNEY</small></div>
          <div className="journey-section__title">
            <p className="section-kicker section-kicker--light">Data storytelling</p>
            <h2>Mỗi bài là một nấc phát triển, không phải mảnh ghép rời rạc.</h2>
          </div>
          <div className="journey-track">
            <div className="journey-line" aria-hidden="true" />
            <article><span>01–03</span><h3>Công cụ nền tảng</h3><p>Quản lý tệp, nghiên cứu học thuật và thiết kế prompt.</p></article>
            <article><span>04</span><h3>Hợp tác nhóm</h3><p>Điều phối công việc và tài nguyên trên môi trường trực tuyến.</p></article>
            <article><span>05</span><h3>Sáng tạo thực chiến</h3><p>Tích hợp nhiều công cụ AI trong một quy trình sản xuất nội dung.</p></article>
            <article><span>06</span><h3>Định chuẩn đạo đức</h3><p>Minh bạch, kiểm chứng và giữ con người trong vòng kiểm soát.</p></article>
          </div>
        </div>
      </section>

      <section className="reflection-section" id="tong-ket">
        <div className="section-shell reflection-section__grid">
          <div className="section-index"><span>04</span><small>REFLECTION</small></div>
          <div className="reflection-section__intro">
            <p className="section-kicker">Tổng kết cá nhân</p>
            <h2>Công nghệ là đòn bẩy.<br />Tư duy mới là điểm tựa.</h2>
          </div>
          <div className="reflection-quote">
            <span>Điểm tâm đắc nhất</span>
            <blockquote>
              Qua Bài 3 và Bài 5, em nhận ra chất lượng đầu ra phụ thuộc vào chất lượng đầu vào và khả năng thẩm định của con người. Bài 6 giúp em hiểu rằng minh bạch về sự hỗ trợ của AI không làm giảm giá trị bài làm; ngược lại, đó là biểu hiện của năng lực làm chủ công nghệ và sự trung thực học thuật.
            </blockquote>
          </div>
          <div className="challenge-grid">
            <article>
              <span>01</span>
              <h3>Content Curation</h3>
              <p><b>Vấn đề:</b> Báo cáo PDF dày đặc dễ làm người đọc bị ngợp.</p>
              <p><b>Giải pháp:</b> Chuyển dữ liệu thành block nội dung, bảng và infographic dễ tiếp nhận.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Data Storytelling</h3>
              <p><b>Vấn đề:</b> Sáu bài tập có nguy cơ trở thành những phần rời rạc.</p>
              <p><b>Giải pháp:</b> Sắp xếp theo tiến trình năng lực từ nền tảng đến đạo đức AI.</p>
            </article>
            <article>
              <span>03</span>
              <h3>AI Literacy</h3>
              <p><b>Vấn đề:</b> “Ảo giác AI” có thể tạo thông tin hoặc hình ảnh thiếu chính xác.</p>
              <p><b>Giải pháp:</b> Áp dụng Iteration & Validation và nguyên tắc Human-in-the-loop.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
