import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-300">Welcome to my portfolio!</h1>

      <p>I'm a student of business informatics at the University of Duisburg-Essen, Essen. 
        I'm fascinated by the intersection of technology and human behavior.</p>
      <p>Feel free to explore my projects and get in touch!</p>
      <a
        className="inline-flex items-center gap-2 rounded-md bg-blue-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        href="mailto:your@email.com"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16v12H4z" />
          <path d="m22 6-10 7L2 6" />
        </svg>
        Say hi
      </a>
    </div>
  );
}
