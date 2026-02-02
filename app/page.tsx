import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-500">Welcome to my portfolio!</h1>
      <a
        className="inline-block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        href="mailto:your@email.com"
      >
        Contact me
      </a>
    </div>
  );
}
