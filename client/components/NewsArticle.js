import React from "react";
import {
  NewsArticleContainer,
  PreviewImage,
  ArticleContentContainer,
  ArticleTitle,
  ArticleSource,
  ArticleContent,
} from "./styles";

const NewsArticle = (props) => {
  return (
    <NewsArticleContainer href={props.link}>
      <PreviewImage>
        <img src={props.img}></img>
      </PreviewImage>
      <ArticleContentContainer>
        <ArticleTitle>{props.title}</ArticleTitle>
        <ArticleSource>{props.source}</ArticleSource>
        <ArticleContent>{props.blurb}</ArticleContent>
      </ArticleContentContainer>
    </NewsArticleContainer>
  );
};
export default NewsArticle;
