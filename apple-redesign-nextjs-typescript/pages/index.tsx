import { Tab } from "@headlessui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  const { Group, List, Panel, Panels } = Tab;
  return (
    <div>
      <Head>
        <title>Apple redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[rgba(27,27,27,0.95)]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Group>
            <List className="flex justify-center">
              <Tab>Iphone</Tab>
            </List>
            <Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Panel>
                <div className="bg-teal-600">
                  <h1>Awesomeness</h1>
                </div>
              </Panel>
              <Panel>
                <div className="bg-teal-600">
                  <h1>Added</h1>
                </div>
              </Panel>
            </Panels>
          </Group>
        </div>
      </section>
    </div>
  );
};
export default Home;

// ? Backend Code
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
