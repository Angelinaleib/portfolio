import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="/projects/data-bias-ai">Data Bias in AI</Link>
        </li>
        <li>
         <a
  href="https://anchoring-tool-igec52c2pt2r8zx3ahra9b.streamlit.app"
  target="_blank"
  rel="noopener noreferrer"
>
  Anchoring-Quiz
</a>
        </li>
      </ul>
    </>
  );
}
