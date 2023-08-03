import React from "react";
import type { Metadata } from "next";
import { getMenu } from "../../api/menu";
import { Menu } from "./components/menu/menu";



export default async function Home() {
  const menu = await getMenu(0);
  return (
    <>
      <main>
        <div>
          <p>Home</p>
          <Menu />
        </div>
      </main>
    </>
  );
}
