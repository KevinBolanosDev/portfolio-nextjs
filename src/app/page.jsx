"use client";
import { Redirect } from "next/navigation";

export default function Home() {
  return (
    <main>
      <Redirect href="/home" />
    </main>
  );
}
