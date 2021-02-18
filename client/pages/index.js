import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import { H3, Main, Hero, BelowTheFold } from "./styles";
import CaseGraph from "../components/CaseGraph";
import { useAuth } from "../components/Auth";

export default function Home() {
  const { user } = useAuth();

  useEffect(() => {
    if (user === null) {
      Router.push("/portal");
    }
  });

  if (user === null) {
    return <p>No user, redirecting to login</p>;
  }

  return (
    <div>
      <Head>
        <title>Track-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Hero>
          <H3>New Cases Near</H3>
          <h1>70</h1>
          <CaseGraph />
        </Hero>
        <BelowTheFold></BelowTheFold>
      </Main>
    </div>
  );
}
