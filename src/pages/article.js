import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import Data from "../components/data";

function Article(){
    //maybe add background image?
    const {id} = useParams();
    
    const articleData = Data.find((article)=>
    article.id === id);

    const date = useMemo(()=> {
        if (!articleData)  return ''
        const parsedDate = new Date(articleData.publishedDate)

        return parsedDate.toDateString();}, 
        [articleData]);
    
    return(
        // const backgroundImageURL = "url"
        <main className="article">
            <header
                className="article-header"
                style={{
                    backgroundImage: `url('${articleData.image.url}')`, 
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    padding: "40px 25px",
                }}
            >
                <div className="article--header--wrapper">
                    <h1>{articleData.title}</h1>
                    <p>{date}</p>
                    <p className="blurb">{articleData.blurb}</p>
                </div>
            </header>
            <section className="article--content">
                {/* This is where content goes */}
            </section>
        </main>
    )
}

export default Article;