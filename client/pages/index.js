import Head from "next/head";
import { Main, Hero, BelowTheFold } from "./styles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Track-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Hero>
          <h1>Foo</h1>
        </Hero>
        <BelowTheFold></BelowTheFold>
      </Main>
    </div>
  );
}
