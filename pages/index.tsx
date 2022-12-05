import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Header } from "../components";
import { Session } from "../utils/types/session";

const Home: NextPage<Session> = ({ user }) => {
  console.log(user);

  return <>{user && <Header />}</>;
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
