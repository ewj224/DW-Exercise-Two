import React from "react";
//needs to be done every time

function List(){
    return (
        <main className="pageWrapper">
            <h1>Articles List</h1>
            <ArticleCard imageAlt="hi" imageSrc="hi"/>
            <ArticleCard />
            <ArticleCard />
            //ask professor about this being not defined?
        </main>
    )
}

export default List;