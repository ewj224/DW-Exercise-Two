import React from "react";
//needs to be done every time
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function List(){
    console.log(Data[0]);
    return (
        <main className="pageWrapper">
            <h1>Articles List</h1>

            {Data.map((article,i)=>(
                <ArticleCard
                    key={i}
                    blurb={article.blurb}
                    date={article.publishedDate}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    title={article.title}
                />
            ))}
        </main>
    )
}

export default List;