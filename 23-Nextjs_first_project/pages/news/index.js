import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <Link href="/news/nextjs-framework">NextJs framework</Link>
        <li>Something else</li>
      </ul>
    </>
  );
}

export default NewsPage;
