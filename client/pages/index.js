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
import Statistics from "../components/Statistics";
import { useCookies } from "react-cookie";

const db = firebase.firestore();

const addCase = (area) => {
  let ref = db.collection("areas").doc(area).collection("cases");
  let today = new Date(new Date().setHours(0, 0, 0, 0));

  ref
    .where("date", ">=", today)
    .orderBy("date", "asc")
    .limit(1)
    .get()
    .then((snapshot) => {
      if (snapshot.docs.length >= 1) {
        let dat = snapshot.docs[0].data();
        let id = snapshot.docs[0].id;
        ref.doc(id).set({ ...dat, cases: dat["cases"] + 1 });
      } else {
        ref.add({ date: today, cases: 1 });
      }
    });
};

export default function Home() {
  const [isModal, setModal] = React.useState(false);
  const [titleText, setTitleText] = React.useState("");
  const [bodyText, setBodyText] = React.useState("");
  const [postcode, setPostcode] = useState("");
  const [data, setData] = useState(null);
  const [isSick, setIsSick] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["uid"]);

  const { user } = useAuth();

  useEffect(() => {
    if (user === null && cookies["uid"] === undefined) {
      Router.push("/portal");
    } else {
      const usersRef = db.collection("users").doc(cookies["uid"]);

      usersRef.get().then((user_doc) => {
        if (user_doc.exists) {
          const post = user_doc.data()["post_code"];
          setPostcode(post);
          const sick = user_doc.data()["is_sick"];
          setIsSick(sick);

          const casesRef = db
            .collection("areas")
            .doc(post.substring(0, 3))
            .collection("cases");

          casesRef
            .orderBy("date", "asc")
            .limit(7)
            .get()
            .then((snapshot) => {
              setData(
                snapshot.docs.map((doc) => ({
                  date: doc
                    .data()
                    ["date"].toDate()
                    .toString()
                    .match(/(.*?\s){3}/g)[0],
                  cases: doc.data()["cases"],
                }))
              );
            });
        }
      });
    }
  }, []);

  if (user === null && cookies["uid"] === undefined) {
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
          <h1>{data ? data[data.length - 1]["cases"] : 0}</h1>
          <CaseGraph data={data} />
        </Hero>
        <BelowTheFold>
          <ResourceButtons
            setModal={setModal}
            setTitleText={setTitleText}
            setBodyText={setBodyText}
            addCase={() => {
              addCase(postcode.substring(0, 3));
            }}
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
        ></Modal>
      </RemoveScroll>
    </div>
  );
}
