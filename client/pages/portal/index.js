import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
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
import firebase from "../../components/firebase";
import { useCookies } from "react-cookie";

const db = firebase.firestore();

const Login = () => {
  const { user, signinWithGoogle, signinWithFacebook, signout } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies(["uid"]);

  useEffect(() => {
    if (user !== null && user !== false) {
      const uid = user.uid;
      setCookie("uid", uid);
      console.log(uid);
      const usersRef = db.collection("users").doc(uid);
      usersRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            Router.push("/");
          });
        } else {
          Router.push("/portal/onboard");
        }
      });
    }
  });
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
          <img src={"/images/blobs/blob2.svg"} width={400} />
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
