import React, { useState, useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";
import Head from "next/head";
import Router from "next/router";

import { H3, Main, Hero, BelowTheFold } from "./styles";
import CaseGraph from "../components/CaseGraph";
import { useAuth } from "../components/Auth";
import ResourceButtons from "../components/ResourceButtons";
import Modal from "../components/Modal";
import News from "../components/News";

export default function Home() {
  const [isModal, setModal] = React.useState(false);
  const [titleText, setTitleText] = React.useState("");
  const [bodyText, setBodyText] = React.useState("");

  const { user } = useAuth();

  // useEffect(() => {
  //   if (user === null) {
  //     Router.push("/portal");
  //   }
  // });

  // if (user === null) {
  //   return <p>No user, redirecting to login</p>;
  // }

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
          <ResourceButtons
            setModal={setModal}
            setTitleText={setTitleText}
            setBodyText={setBodyText}
          />
          <News
          Title = "Rob Foird Asjh ASDFhi aLa khjd aAp asiho a"
          Source = "CBC"
          Content = "Rob Foird Asjh ASDFhi aLa khjd aAp fa sdoiha foaidf asfpdhf sdgdapihawdgfoaihfafodh"
          Link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
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
