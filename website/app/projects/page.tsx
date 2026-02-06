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
          <Link
          href="https://github.com/angelinaleib/anchoring-tool"
          target="_blank"
        >
          Bias-Tool
        </Link>
        </li>
      </ul>
    </>
  );
}
