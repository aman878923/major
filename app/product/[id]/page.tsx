import Link from "next/link";
import React from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product: {params.id}</h1>
      <h2>
        <Link href="/">go back home</Link>
      </h2>
    </div>
  );
}
