import Link from "next/link";
import React from "react";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <h1>Product: {id}</h1>
      <h2>
        <Link href="/">go back home</Link>
      </h2>
    </div>
  );
}

