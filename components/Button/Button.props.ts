import { DetailedHTMLProps, ReactNode } from "react";
export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}


// import { HtmlHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
// export interface ButtonProps
//   extends DetailedHTMLProps<
//     React.HtmlHTMLAttributes<HTMLParagraphElement>,
//     HTMLParagraphElement
//   > {
//   children: React.ReactNode;
//   appearance: "primary" | "ghost";
// }
