import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4 text-center">
      <h1> welcome to next js</h1>
      <h2>
        <Link href="/about">go to about page</Link>
      </h2>
    </div>
  );
}
