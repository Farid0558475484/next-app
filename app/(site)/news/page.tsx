import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "News page",
  keywords: "News, page",
};

export default function News(): JSX.Element {
  return (
    <>
      <div>
        <p>News</p>
      </div>
    </>
  );
}
