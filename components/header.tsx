import Link from "next/link";
import React from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className="flex justify-between mx-16 py-6">
      <ul className="text-primary text-2xl flex justify-between gap-12 pl-[15%] uppercase font-[900] py-6 items-center px-16">
        <li>
          <Link href="/">kezdőlap</Link>
        </li>
        <li>
          <Link href="/products">cserék</Link>
        </li>
        <li>
          <Link href="/home">cseréid</Link>
        </li>
        <li>
          <Link href="/home">rólunk</Link>
        </li>
      </ul>
      <div>
        <button className="border-white text-white px-6 py-2 bg-transparent border-2 rounded-xl hover:opacity-80">
          <Link href="/register">Regisztráció</Link>
        </button>
        <button className="border-white text-white px-6 py-2 bg-transparent m-3 border-2 rounded-xl hover:opacity-80">
          <Link href="/login">Belépés</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
