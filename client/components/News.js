import React, { useEffect, useState } from "react";
import {
  NewsContainer,
  NewsSlider,
  NewsSliderContainer,
  NewsArea,
  NewsGroup,
} from "./styles";
import NewsArticle from "./NewsArticle";
import Link from "next/link";

const News = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const headers = {
      "Ocp-Apim-Subscription-Key": "17c706aaaa8f482592f189952eb055c0",
    };
    const search_url =
      "https://api.bing.microsoft.com/v7.0/news/search?q=covid&mkt=en-ca&safeSearch=moderate&textdecorations=true&textformat=raw&count=10&offset=0";

    fetch(search_url, { headers })
      .then((response) => response.json())
      .then((res) => {
        setArticles(res.value);
      });
  }, []);

  return (
    <NewsContainer>
      <h2>News For You</h2>
      <NewsSlider>
        <NewsArea>
          <NewsGroup name="slide-1" id="slide-1">
            <NewsArticle article={articles[0]} />
            <NewsArticle article={articles[1]} />
            <NewsArticle article={articles[2]} />
          </NewsGroup>
          <NewsGroup name="slide-2" id="slide-2">
            <NewsArticle article={articles[3]} />
            <NewsArticle article={articles[4]} />
            <NewsArticle article={articles[5]} />
          </NewsGroup>
          <NewsGroup name="slide-3" id="slide-3">
            <NewsArticle article={articles[6]} />
            <NewsArticle article={articles[7]} />
            <NewsArticle article={articles[8]} />
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
