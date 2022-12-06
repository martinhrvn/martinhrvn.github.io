import Link from "next/link";

export default function About() {
  return (
    <div>
      <div>About me</div>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  );
}
