import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page",
  description: " page",
  keywords: " page",
};

export default function PageProducts({
  params,
}: {
  params: { alias: string };
}) {
  return (
    <>
      <div>
        <p>News {params.alias}</p>
      </div>
    </>
  );
}
