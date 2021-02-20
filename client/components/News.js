import React, { useEffect } from "react";
import {
  NewsContainer,
  NewsSlider,
  NewsSliderContainer,
  NewsArea,
  NewsGroup,
} from "./styles";
import NewsArticle from "./NewsArticle";
import Link from "next/link";
import axios from "axios";

const News = (props) => {
  useEffect(() => {
    fetch(
      `https://serpapi.com/search.json?q=Covid-19&tbm=nws&location=Canada&api_key=2267c522ba5c5fb8221ae97d08e017fe62df21ee1fc3370baec9bbb4bd846bf3`
    ).then((res) => {
      console.log(res.data);
    });
  });
  return (
    <NewsContainer>
      <h2>News For You</h2>
      <NewsSlider>
        <NewsArea>
          <NewsGroup name="slide-1" id="slide-1">
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
          </NewsGroup>
          <NewsGroup name="slide-2" id="slide-2">
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
          </NewsGroup>
          <NewsGroup name="slide-3" id="slide-3">
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
          </NewsGroup>
          <NewsGroup name="slide-4" id="slide-4">
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
          </NewsGroup>
        </NewsArea>
        <NewsSliderContainer>
          <Link href="#slide-1" scroll={false}>
            <a>1</a>
          </Link>
          <Link href="#slide-2" scroll={false}>
            <a>2</a>
          </Link>
          <Link href="#slide-3" scroll={false}>
            <a>3</a>
          </Link>
          <Link href="#slide-4" scroll={false}>
            <a>4</a>
          </Link>
        </NewsSliderContainer>
      </NewsSlider>
    </NewsContainer>
  );
};

export default News;
