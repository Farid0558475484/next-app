// import Image from "next/image";
// import styles from "./page.module.css";
// import type { Metadata } from "next";
"use client"
import React, { use, useState, useEffect } from "react";
import { Htag, Button, P, Tag } from "./components/page";

// import Logo from "./../public/vercel.svg";

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export async function generateMetaData(): Promise<Metadata> {
//   //... fethc data from api
//   return {
//     title: "Create Next App",
//     description: "Generated by create next app",
//   };
// }

export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);

useEffect(() => {
  console.log('component mounted'+ count)
}, [])


  return (
    <>
      <Htag tag="h1">{count}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCount(x => x + 1)}
      >
 
        Knopka
      </Button>
      <Button appearance="ghost" arrow="down"         onClick={() => setCount(x => x - 1)}>
        Knopka
      </Button>
      <P size="s">Malenkiy</P>
      <P size="m">Sredniy</P>
      <P size="l">Bolshoy</P>
      <Tag size="s" color="ghost">
        Ghost
      </Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="grey">
        Grey
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="m" color="primary">
        Primary
      </Tag>
    </>
  );
}
