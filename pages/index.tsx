import Head from "next/head";
import { useState, useEffect } from "react";
import { CiClock2 } from "react-icons/ci";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

export interface user {
  name: string;
  age: number;
  password: string;
  email: string;
}

const Page: NextPageWithLayout = () => {
  const [user, setUser] = useState<user | undefined>(undefined);
  useEffect(() => {
    const data = fetch("/api/hello").then((res) => console.log(res.json()));
  });
  const onClickHandler = () => {
    if (user) {
      console.log("hi");
    } // ha be van jelentkezve akkor a recommended page, ha nem akkor bejelentkezés
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-[10%] w-fit p-6 ">
        <div className="flex px-5 mx-5">
          <CiClock2 className="text-white bg-[#b0d576] rounded-full text-bold text-[5rem]" />
        </div>

        <div className="px-16">
          <h1 className="underline text-[70px] text-primary">TeCseréd</h1>
          <h2 className="text-primary text-[39px]">Alkudj, ha tudsz!</h2>
          <p className="text-white">
            Magyarország első weboldala, ahol feleslegessé vált dolgaidat
            cserélheted valami hasznosra
          </p>
        </div>
        <button
          className="bg-[#b0d576] p-5 rounded-xl text-white text-bold mx-20 text-2xl my-5"
          onClick={onClickHandler}
        >
          Vágjunk bele!
        </button>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
