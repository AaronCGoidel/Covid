import React, { useState, useEffect, useContext } from "react";
import { RemoveScroll } from "react-remove-scroll";
import Head from "next/head";
import Router from "next/router";

import { H3, Main, Hero, BelowTheFold } from "./styles";
import CaseGraph from "../components/CaseGraph";
import { useAuth } from "../hooks/useAuth";
import ResourceButtons from "../components/ResourceButtons";
import Modal from "../components/Modal";
import News from "../components/News";
import firebase from "../components/firebase";

const db = firebase.firestore();
import Statistics from "../components/Statistics";

export default function Home() {
  const [isModal, setModal] = React.useState(false);
  const [titleText, setTitleText] = React.useState("");
  const [bodyText, setBodyText] = React.useState("");
  const [postcode, setPostcode] = useState("");
  const [cases, setCases] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user === null) {
      Router.push("/portal");
    } else {
      const usersRef = db.collection("users").doc(user.uid);

      usersRef.get().then((doc) => {
        if (doc.exists) {
          const post = doc.data()["post_code"];
          setPostcode(post);

          const casesRef = db
            .collection("areas")
            .doc(post.substring(0, 3))
            .collection("cases");

          casesRef
            .orderBy("date", "asc")
            .limit(7)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setCases([...cases, doc.data()["cases"]]);
              });
            });
        }
      });
    }
  }, []);

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
          <H3>New Cases Near {postcode}</H3>
          <h1>{cases[0]}</h1>
          <CaseGraph />
        </Hero>
        <BelowTheFold>
          <ResourceButtons
            setModal={setModal}
            setTitleText={setTitleText}
            setBodyText={setBodyText}
          />
          <News
            Title="Rob Foird Asjh ASDFhi aLa khjd aAp asiho a"
            Source="CBC"
            Content="Rob Foird Asjh ASDFhi aLa khjd aAp fa sdoiha foaidf asfpdhf sdgdapihawdgfoaihfafodh"
            Link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
          <Statistics />
        </BelowTheFold>
      </Main>
      <RemoveScroll enabled={isModal}>
        <Modal
          isVisible={isModal}
          title={titleText}
          content={bodyText}
          onClose={() => setModal(false)}
        />
      </RemoveScroll>
    </div>
  );
}
