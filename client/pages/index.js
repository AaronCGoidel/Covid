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
        >
          {bodyText == 2 && (
            <div>
              <p>
                The two authorized vaccines for Canada are the Moderna and
                Pfizer-BioNTech COVID-19 vaccines
              </p>
              <p>
                Both vaccines prevent the infection of COVID-19 by teaching
                cells how to make a specific protein. This protein triggers our
                immune system to make antibodies, which can fight the real virus
                if it enters our body in the future
              </p>
              <p>
                The Moderna vaccine is approved for people who are 18 years of
                age and older, while the Pfizer vaccine is approved for people
                who are 16 years of age or older
              </p>
              <p>
                Both are most effective in two doses, with the Pfizer vaccine’s
                second dose done 21 days after the first, and the Moderna
                vaccine’s second dose done a month after
              </p>
              <p>
                Side effects of both are similar to what you might have to other
                vaccines - pain at the site of the injection, body chills,
                feeling tired or feeling feverish. None of these pose a risk to
                your health
              </p>
              <p>
                As with all vaccines, there’s a chance that there will be a
                serious side effect, but these are rare. A serious side effect
                might be something like an allergic reaction. Speak with your
                health professional about any serious allergies or other health
                conditions you may have before you receive either vaccine
              </p>
              <p>
                As of now, the vaccine is only available to those who are most
                vulnerable to the virus (e.g. residents of long-term care homes)
                for most provinces.
              </p>
              <p>
                For more information on the rollout plan specific to your
                province, go to “Where to get vaccinated in your province or
                territory” at{" "}
                <a
                  href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/vaccines/overview.html
"
                >
                  this site.
                </a>
              </p>
              <a
                href={
                  "https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/vaccines.html"
                }
              >
                Learn mode.
              </a>
            </div>
          )}
        </Modal>
      </RemoveScroll>
    </div>
  );
}
