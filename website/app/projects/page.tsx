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
  href="https://github.com/angelinaleib/anchoring-tool/blob/main/anchoring.py"
  target="_blank"
  rel="noopener noreferrer"
>
  Bias-Tool
</a>
        </li>
      </ul>
    </>
  );
}
