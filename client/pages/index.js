import Head from "next/head";
import { H3, Main, Hero, BelowTheFold } from "./styles";
import CaseGraph from "../components/CaseGraph";
import ResourceButtons from "../components/ResourceButtons";

export default function Home() {
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
        <BelowTheFold>
          <ResourceButtons/>
        </BelowTheFold>
      </Main>
    </div>
  );
}
