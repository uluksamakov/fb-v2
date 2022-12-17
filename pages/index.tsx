import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Feed, Header, Sidebar, Widgets } from "../components";
import { Session } from "../utils/types/session";

const Home: NextPage<Session> = ({ user }) => {
  return (
    <>
      {user && (
        <div className="h-screen bg-gray-100 overflow-hidden">
          {/* HEADER */}
          <Header />
          {/* MAIN CONTENTS */}
          <main className="flex">
            <Sidebar />
            <Feed />
            <Widgets />
          </main>
        </div>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const user = session?.user;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};
