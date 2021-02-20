import React from 'react';
import { NewsArticleContainer, PreviewImage, ArticleContentContainer, 
        ArticleTitle, ArticleSource, ArticleContent } from "./styles";

const NewsArticle = (props) => {
    return (
    <NewsArticleContainer href="https://www.youtube.com/watch?app=desktop&v=dQw4w9WgXcQ">
        <PreviewImage>
            <img src={"Rob.png"}></img>
        </PreviewImage>
        <ArticleContentContainer>
            <ArticleTitle>Rob Ford Bob Schmord the Rord Blord Bored Man Dord</ArticleTitle>
            <ArticleSource>CBC</ArticleSource>
            <ArticleContent>Bord Drod eat ssmortd asoihf lord bord kord dord ordkalh</ArticleContent>
        </ArticleContentContainer>
    </NewsArticleContainer>
    )
}
export default NewsArticle;