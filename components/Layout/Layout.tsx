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
        <meta name="description" content="Facebook clone, Facebook v2" />
        <meta
          name="keywords"
          content="Facebook clone, Facebook v2, Next.js, Tailwind CSS clone"
        />
        <meta name="author" content="Erys Mozo | @ErysCode7" />
        <title>Facebook</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
