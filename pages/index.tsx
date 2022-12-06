import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Header, Sidebar } from "../components";
import { Session } from "../utils/types/session";

const Home: NextPage<Session> = ({ user }) => {
  return (
    <>
      {user && (
        <>
          <Header />
          {/* MAIN CONTENTS */}
          <main className="flex">
            <Sidebar />
          </main>
        </>
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
