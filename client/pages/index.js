import React, { useState } from "react";
import {RemoveScroll} from 'react-remove-scroll';
import Head from "next/head";
import { H3, Main, Hero, BelowTheFold } from "./styles";
import CaseGraph from "../components/CaseGraph";
import ResourceButtons from "../components/ResourceButtons";
import Modal from "../components/Modal";


export default function Home() {
  const [isModal, setModal] = React.useState(false);
  const [titleText, setTitleText] = React.useState("");
  const [bodyText, setBodyText] = React.useState("");

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
          setModal = {setModal}
          setTitleText = {setTitleText}
          setBodyText = {setBodyText}/>
          
        </BelowTheFold>
      </Main>
      <RemoveScroll enabled={isModal}>
        <Modal
          isVisible={isModal}
          title={titleText}
          content={bodyText}
          onClose={() => setModal(false)}/>
      </RemoveScroll>
    </div>
  );
}
