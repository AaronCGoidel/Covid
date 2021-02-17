import React from "react";
import Head from "next/head";
import { Main, Blob, Dude, Dude2 } from "./styles";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Portal | Track-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Blob>
          <img src={"/images/blobs/blob2.svg"} width={400} alt="React Logo" />
        </Blob>
        <Dude>
          <img src={"/images/dudes/dude1.svg"} />
        </Dude>
        <Dude2>
          <img src={"/images/dudes/dude2.svg"} width={220} />
        </Dude2>
      </Main>
    </div>
  );
};

export default Login;
