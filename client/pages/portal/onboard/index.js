import React, { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import firebase from "../../../components/firebase";
import { BGContainer, SignInContainer, Splash } from "../styles";
import { PostInput, GoBtn, Blob, Blob2, Blob3 } from "./styles";
import { useCookies } from "react-cookie";

const db = firebase.firestore();

const Onboard = (props) => {
  const [code, setCode] = useState("");
  const [cookies] = useCookies(["uid"]);

  const uid = cookies["uid"];

  const doSubmit = () => {
    if (code.length !== 6) {
      alert("Postal Code must be 6 characters long.");
    } else {
      db.collection("users").doc(uid).set({
        is_sick: false,
        post_code: code,
      });
      Router.push("/");
    }
  };

  return (
    <div>
      <Head>
        <title>Onboarding | Track-19</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BGContainer>
        <Blob>
          <img src={"/images/blobs/blob3.svg"} width={400} alt="React Logo" />
        </Blob>
        <Blob2>
          <img src={"/images/blobs/blob5.svg"} width={450} alt="React Logo" />
        </Blob2>
        <Blob3>
          <img src={"/images/blobs/blob4.svg"} width={300} alt="React Logo" />
        </Blob3>
      </BGContainer>
      <SignInContainer>
        <Splash>What is your Postal Code?</Splash>

        <PostInput
          onChange={(e) => setCode(e.target.value)}
          type="text"
          id="fname"
          name="postcode"
          placeholder="Your postal code.."
          required
        ></PostInput>
        <GoBtn onClick={doSubmit}>Let's Go!</GoBtn>
      </SignInContainer>
    </div>
  );
};

export default Onboard;
