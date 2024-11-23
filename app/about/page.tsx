import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>this is about page</h1>
      <h2>
        <Link href="/">go BACK</Link>{" "}
      </h2>
    </div>
  );
}
