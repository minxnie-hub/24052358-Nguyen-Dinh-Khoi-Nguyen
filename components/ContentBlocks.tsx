import { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="report-section" id={id}>
      <div className="report-section__heading">
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      <div className="report-section__body">{children}</div>
    </section>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="report-lead">{children}</p>;
}

export function Callout({ title, children, tone = "default" }: { title?: string; children: ReactNode; tone?: "default" | "cyan" | "lime" | "gold" | "red" | "blue" }) {
  return (
    <aside className={`callout callout--${tone}`}>
      {title && <strong>{title}</strong>}
      <div>{children}</div>
    </aside>
  );
}

export function PromptCard({ level, title, children }: { level: "Cơ bản" | "Cải tiến" | "Nâng cao"; title?: string; children: ReactNode }) {
  const className = level === "Cơ bản" ? "basic" : level === "Cải tiến" ? "improved" : "advanced";
  return (
    <article className={`prompt-card prompt-card--${className}`}>
      <header>
        <span>{level}</span>
        {title && <h3>{title}</h3>}
      </header>
      <blockquote>{children}</blockquote>
    </article>
  );
}

export function ToolCard({ name, role, children }: { name: string; role: string; children: ReactNode }) {
  return (
    <article className="tool-card">
      <div className="tool-card__top">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
      <div>{children}</div>
    </article>
  );
}

export function DataTable({ headers, rows, caption }: { headers: string[]; rows: (string | ReactNode)[][]; caption?: string }) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StepList({ items }: { items: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="step-list">
      {items.map((item, index) => (
        <li key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><strong>{item.title}</strong><div>{item.text}</div></div>
        </li>
      ))}
    </ol>
  );
}

export function TagList({ items }: { items: string[] }) {
  return <div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}
