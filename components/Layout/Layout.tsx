import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Facebook</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
