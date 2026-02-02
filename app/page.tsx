import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-300">Welcome to my portfolio!</h1>

      <p>I'm a student of business informatics at the University of Duisburg-Essen, Essen. 
        I'm fascinated by the intersection of technology and human behavior.</p>
      <p>Feel free to explore my projects and get in touch!</p>
      <a
        className="inline-block rounded-md bg-blue-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        href="mailto:your@email.com"
      >
        Say hi
      </a>
    </div>
  );
}
