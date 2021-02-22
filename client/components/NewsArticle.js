import React from "react";
import {
  NewsArticleContainer,
  PreviewImage,
  ArticleContentContainer,
  ArticleTitle,
  ArticleSource,
  ArticleContent,
} from "./styles";

const NewsArticle = ({ article }) => {
  return (
    <NewsArticleContainer href={article?.url}>
      <PreviewImage>
        <img
          src={
            article?.image
              ? article.image.thumbnail.contentUrl
              : "/images/news.svg"
          }
        ></img>
      </PreviewImage>
      <ArticleContentContainer>
        <ArticleTitle>
          {article?.name.replace(/[^\x00-\x7F]/g, "")}
        </ArticleTitle>
        <ArticleSource>{article?.provider[0].name}</ArticleSource>
      </ArticleContentContainer>
    </NewsArticleContainer>
  );
};
export default NewsArticle;
