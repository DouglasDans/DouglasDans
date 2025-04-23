import type { Metadata } from "next";
import { Open_Sans, Lexend } from "next/font/google";
import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/next";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Douglas Nascimento - Desenvolvedor de Software Fullstack",
  description: "Meu site com informações profissionais, carta de apresentação e projetos de portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
      </head>
      <body className={`${openSans.className} ${lexend.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
