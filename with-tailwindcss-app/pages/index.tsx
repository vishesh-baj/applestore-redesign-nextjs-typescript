import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col px-10 gap-5 bg-gray-800">
      <Head>
        <title>Apple Redesign Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lets build apple redesign</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        molestias? Quas, temporibus aspernatur? Velit, doloremque blanditiis?
        Fugit debitis, unde nostrum cum blanditiis sit facere voluptates, soluta
        amet at exercitationem assumenda!
      </p>
      <button className="px-4 py-2 bg-teal-500 hover:shadow-teal-500 hover:shadow-md text-white rounded-md transition ease-in-out duration-100">
        Know more
      </button>
    </div>
  );
};

export default Home;
