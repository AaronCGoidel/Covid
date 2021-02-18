import React from "react";
import Head from "next/head";
import {
  BGContainer,
  Blob,
  Dude,
  Dude2,
  FBButton,
  GoogleButton,
  SignInContainer,
  Splash,
} from "./styles";
import { useAuth } from "../../components/Auth";

const Login = () => {
  const { user, signinWithGoogle, signinWithFacebook, signout } = useAuth();
  return (
    <div>
      <Head>
        <title>Portal | Track-19</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BGContainer>
        <Blob>
          <img src={"/images/blobs/blob2.svg"} width={400} alt="React Logo" />
        </Blob>
        <Dude>
          <img src={"/images/dudes/dude1.svg"} />
        </Dude>
        <Dude2>
          <img src={"/images/dudes/dude2.svg"} width={220} />
        </Dude2>
      </BGContainer>
      <SignInContainer>
        <Splash>Covid Tracking for Humans</Splash>
        <GoogleButton onClick={() => signinWithGoogle()}>
          Sign In With Google
        </GoogleButton>
        <FBButton onClick={() => signinWithFacebook()}>
          Sign In With Facebook
        </FBButton>
      </SignInContainer>
    </div>
  );
};

export default Login;
