import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around min-h-screen p-24">
      <h1 className="text-4xl font-bold text-center">
        {" "}
        Aprendiendo Data Fetching - soyHenry{" "}
      </h1>
      <nav className="flex gap-3 text-xl">
        <Link href={"/products"}> Products </Link>
        <Link href={"/products/categories"}> Categories </Link>
        <Link href={"/products/1"}> Product detail </Link>
      </nav>
    </main>
  );
}
