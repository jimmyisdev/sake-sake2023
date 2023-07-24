"use client";
import Fallback from "./components/Fallback";
import Link from "next/link";

export default function NotFound({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section>
      <Fallback text="Something went wrong!" />
      <Link href="/">Back</Link>
    </section>
  );
}
