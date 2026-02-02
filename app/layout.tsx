import "./globals.css";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className="font-roboto-mono text-gray-800 leading-relaxed">
        <header className="mb-12">
          <nav className="flex gap-6 text-sm text-gray-700 px-6 pt-3">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto space-y-16">{children}</main>
      </body>
    </html>
  );
}
