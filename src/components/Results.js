import React from 'react';

const Results = props => {

	const articles = this.props.searchResults;
	console.log(articles)

// 	var renderArticles = articles.map((article, i) =>
// 		<div id={i} key= {article.title + i} className="results">
// 		<a href={article.url} target="_blank">{article.title}</a>
// {/*		<button type="button" onClick={(event) => props.saveArticle(event, {i})}>Save </button>*/}
// 		</div>


// 		);//close map function

return(
	<div>
		<h1>Results</h1>
		{/*{renderArticles}*/}
	</div>
)


}
export default Results;