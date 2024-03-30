import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data Fetching",
  description: "Learning data fetching with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-3 text-xl bg-yellow-400">
          <Link href={"/"}> Home </Link>
          <Link href={"/products"}> Products </Link>
          <Link href={"/products/categories"}> Categories </Link>
          <Link href={"/products/1"}> Product detail </Link>
          <Link href={"/timezone"}> Time </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
