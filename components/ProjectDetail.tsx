import Link from "next/link";
import { ProjectMeta, projects } from "@/lib/projects";
import { projectToc, renderProjectContent } from "@/lib/projectContent";

export function ProjectDetail({ project }: { project: ProjectMeta }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  const toc = projectToc[project.slug] || [];

  return (
    <main className={`project-page project-page--${project.accent}`}>
      <section className="project-hero">
        <div className="project-hero__noise" aria-hidden="true" />
        <div className="project-hero__inner">
          <Link href="/#bai-tap" className="back-link">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15 10H5m4-4-4 4 4 4" /></svg>
            Danh sách bài tập
          </Link>
          <span className="project-hero__number">Bài {project.number}</span>
          <p className="project-hero__eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="project-hero__summary">{project.summary}</p>
          <div className="project-hero__skills">
            {project.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="project-hero__signal" aria-hidden="true">
          {Array.from({ length: 28 }, (_, index) => (
            <i key={index} style={{ "--bar": index } as React.CSSProperties} />
          ))}
        </div>
      </section>

      <div className="project-layout">
        <aside className="project-toc" aria-label="Mục lục bài tập">
          <div>
            <span>Nội dung</span>
            <nav>
              {toc.map((item, index) => (
                <a href={`#${item.id}`} key={item.id}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <article className="report-content">{renderProjectContent(project.slug)}</article>
      </div>

      <nav className="project-pagination" aria-label="Chuyển bài tập">
        {previous ? (
          <Link href={`/bai/${previous.slug}`} className="project-pagination__item project-pagination__item--prev">
            <span>Bài trước</span>
            <strong>{previous.number} · {previous.title}</strong>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/bai/${next.slug}`} className="project-pagination__item project-pagination__item--next">
            <span>Bài tiếp theo</span>
            <strong>{next.number} · {next.title}</strong>
          </Link>
        ) : <Link href="/#tong-ket" className="project-pagination__item project-pagination__item--next"><span>Hoàn tất</span><strong>Xem tổng kết hành trình</strong></Link>}
      </nav>
    </main>
  );
}
