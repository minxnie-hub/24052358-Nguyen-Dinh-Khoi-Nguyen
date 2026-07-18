import Link from "next/link";
import { ProjectMeta } from "@/lib/projects";
import { AssetImage } from "./AssetImage";

export function ProjectCard({ project, featured = false }: { project: ProjectMeta; featured?: boolean }) {
  return (
    <Link
      href={`/bai/${project.slug}`}
      className={`project-card project-card--${project.accent}${featured ? " project-card--featured" : ""}`}
    >
      <div className="project-card__media">
        <AssetImage src={project.cover} alt={`Ảnh minh chứng ${project.title}`} loading="lazy" />
        <span className="project-card__number">{project.number}</span>
      </div>
      <div className="project-card__content">
        <span className="project-card__eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card__tags" aria-label="Kỹ năng và công cụ">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="project-card__link">
          Xem bài chi tiết
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5 10h10M11 6l4 4-4 4" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
