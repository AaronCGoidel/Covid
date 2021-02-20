import React from 'react';
import { NewsContainer, NewsSlider, NewsSliderContainer, NewsArea, NewsGroup, NewsArticle, PreviewImage, ArticleContentContainer, 
        ArticleTitle, ArticleSource, ArticleContent } from "./styles"; 
import Link from "next/link";

const News = (props) => {
    return (
        <NewsContainer>
            <h2>News For You</h2>
            <NewsSlider>
                
                <NewsArea>
                    <NewsGroup name="slide-1" id="slide-1">
                        <NewsArticle>
                            <PreviewImage>
                                <img src={"Rob.png"}></img>
                            </PreviewImage>
                            <ArticleContentContainer>
                                <ArticleTitle>Rob Ford Bob Schmord the Rord Blord Bored Man Dord</ArticleTitle>
                                <ArticleSource>CBC</ArticleSource>
                                <ArticleContent>Bord Drod eat ssmortd asoihf lord bord kord dord ordkalh</ArticleContent>
                            </ArticleContentContainer>
                        </NewsArticle>
                        <NewsArticle>
                            <PreviewImage>
                                <img src={"Rob.png"}></img>
                            </PreviewImage>
                            <ArticleContentContainer>
                                <ArticleTitle>Rob Ford Bob Schmord the Rord Blord Bored Man Dord</ArticleTitle>
                                <ArticleSource>CBC</ArticleSource>
                                <ArticleContent>Bord Drod eat ssmortd asoihf lord bord kord dord ordkalh</ArticleContent>
                            </ArticleContentContainer>
                        </NewsArticle>
                        <NewsArticle>
                            <PreviewImage>
                                <img src={"Rob.png"}></img>
                            </PreviewImage>
                            <ArticleContentContainer>
                                <ArticleTitle>Rob Ford Bob Schmord the Rord Blord Bored Man Dord</ArticleTitle>
                                <ArticleSource>CBC</ArticleSource>
                                <ArticleContent>Bord Drod eat ssmortd asoihf lord bord kord dord ordkalh</ArticleContent>
                            </ArticleContentContainer>
                        </NewsArticle>
                    </NewsGroup>
                    <NewsGroup name="slide-2" id="slide-2">
                        2
                    </NewsGroup>
                    <NewsGroup name="slide-3" id="slide-3">
                        3
                    </NewsGroup>
                    <NewsGroup name="slide-4" id="slide-4">
                        4
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
    )
}

export default News;
{/* <CarouselItem>

    <NewsArticle href={props.Link}>
        <PreviewImage>
            <img src={"Rob.png"}></img>
        </PreviewImage>
        <ArticleContentContainer>
            <ArticleTitle>{props.Title}</ArticleTitle>
            <ArticleSource> {props.Source} </ArticleSource>
            <ArticleContent>{props.Content}</ArticleContent>

        </ArticleContentContainer>
    </NewsArticle>
</CarouselItem>
<CarouselItem>

    <NewsArticle href={props.Link}>
        <PreviewImage>
            <img src={"Rob.png"}></img>
        </PreviewImage>
        <ArticleContentContainer>
            <ArticleTitle>{props.Title}</ArticleTitle>
            <ArticleSource> {props.Source} </ArticleSource>
            <ArticleContent>{props.Content}</ArticleContent>

        </ArticleContentContainer>
    </NewsArticle>
</CarouselItem>
<CarouselItem>

    <NewsArticle href={props.Link}>
        <PreviewImage>
            <img src={"Rob.png"}></img>
        </PreviewImage>
        <ArticleContentContainer>
            <ArticleTitle>{props.Title}</ArticleTitle>
            <ArticleSource> {props.Source} </ArticleSource>
            <ArticleContent>{props.Content}</ArticleContent>

        </ArticleContentContainer>
    </NewsArticle>
</CarouselItem>
<CarouselItem>

    <NewsArticle href={props.Link}>
        <PreviewImage>
            <img src={"Rob.png"}></img>
        </PreviewImage>
        <ArticleContentContainer>
            <ArticleTitle>{props.Title}</ArticleTitle>
            <ArticleSource> {props.Source} </ArticleSource>
            <ArticleContent>{props.Content}</ArticleContent>

        </ArticleContentContainer>
    </NewsArticle>
</CarouselItem> */}