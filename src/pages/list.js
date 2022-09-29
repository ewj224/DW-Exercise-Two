import React from "react";
//needs to be done every time
import ArticleCard from "../components/ArticleCard";

function List(){
    return (
        <main className="pageWrapper">
            <h1>Articles List</h1>
            <ArticleCard 
            blurb="words words words"
            date="date"
            imageAlt=""
            imageSrc="hi again"
            title="Article Title"
            />
            <ArticleCard 
            blurb="words words words"
            date="date"
            imageAlt=""
            imageSrc="hi again"
            title="Article Title"/>
            <ArticleCard 
            blurb="words words words"
            date="date"
            imageAlt=""
            imageSrc="hi again"
            title="Article Title"
            />
        </main>
    )
}

export default List;