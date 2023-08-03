import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
  keywords: "about, page",
};

export default function About(): JSX.Element {
  return (
    <>
      <div>
        <p>About</p>
      </div>
    </>
  );
}
