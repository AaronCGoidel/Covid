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
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ca&q=covid&apiKey=451565d5a4f349f3bb9a2804a09a1041"
    )
      .then((response) => response.json())
      .then((res) => {
        const articles = res.articles;
        setArticles(articles);
      });
  }, []);

  return (
    <NewsContainer>
      <h2>News For You</h2>
      <NewsSlider>
        <NewsArea>
          <NewsGroup name="slide-1" id="slide-1">
            <NewsArticle
              link={articles[0]?.url}
              img={articles[0]?.urlToImage}
              title={articles[0]?.title}
              source={articles[0]?.source.name}
            />
            <NewsArticle
              link={articles[1]?.url}
              img={articles[1]?.urlToImage}
              title={articles[1]?.title}
              source={articles[1]?.source.name}
            />
            <NewsArticle
              link={articles[2]?.url}
              img={articles[2]?.urlToImage}
              title={articles[2]?.title}
              source={articles[2]?.source.name}
            />
          </NewsGroup>
          <NewsGroup name="slide-2" id="slide-2">
            <NewsArticle
              link={articles[3]?.url}
              img={articles[3]?.urlToImage}
              title={articles[3]?.title}
              source={articles[3]?.source.name}
            />
            <NewsArticle
              link={articles[4]?.url}
              img={articles[4]?.urlToImage}
              title={articles[4]?.title}
              source={articles[4]?.source.name}
            />
            <NewsArticle
              link={articles[5]?.url}
              img={articles[5]?.urlToImage}
              title={articles[5]?.title}
              source={articles[5]?.source.name}
            />
          </NewsGroup>
          <NewsGroup name="slide-3" id="slide-3">
            <NewsArticle
              link={articles[6]?.url}
              img={articles[6]?.urlToImage}
              title={articles[6]?.title}
              source={articles[6]?.source.name}
            />
            <NewsArticle
              link={articles[7]?.url}
              img={articles[7]?.urlToImage}
              title={articles[7]?.title}
              source={articles[7]?.source.name}
            />
            <NewsArticle
              link={articles[8]?.url}
              img={articles[8]?.urlToImage}
              title={articles[8]?.title}
              source={articles[8]?.source.name}
            />
          </NewsGroup>
          <NewsGroup name="slide-4" id="slide-4">
            <NewsArticle
              link={articles[9]?.url}
              img={articles[9]?.urlToImage}
              title={articles[9]?.title}
              source={articles[9]?.source.name}
            />
            <NewsArticle
              link={articles[10]?.url}
              img={articles[10]?.urlToImage}
              title={articles[10]?.title}
              source={articles[10]?.source.name}
            />
            <NewsArticle
              link={articles[11]?.url}
              img={articles[11]?.urlToImage}
              title={articles[11]?.title}
              source={articles[11]?.source.name}
            />
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
