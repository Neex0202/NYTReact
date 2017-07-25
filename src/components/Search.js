import React from 'react';

// IMPORT CHILDREN (Saved and Search)

//Ask question about creating front-end routes
//Axios (helper) vs Ajax

//INCLUDE AJAX CALL FROM NYT API

var apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var searchTerm 	= "";
var numResults 	= 5;
var startYear = "";  //parseInt
var endYear		= "";  //parseInt
var searchResArray = [];


//Base URL to use in AJAX CALL to grab Articles
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear;



// function searchForArticles(){
// 	$.ajax({
// 		url: queryURLBase,
// 		method: "GET"
// 		}).done(function(searchRes){


// 		})
// 	}


class Search extends React.Component {

	constructor(){  //exclusively for Main class
		super();  //Calls constructor of React.Component so we can override the Constructor

//Search function 
handleSearch = () => {

//RUN ajax call function
}

	}; //Closing Constructor

//Include componentDidMount() function

render(){
return(


  <div>
  <form>
  <label>Topic</label>
    <input className="form-control" id="topic" placeholder="Enter Topic">
      
    </input>
  </form>
    


  </div>
	//HTML
	// <div class="row">
	// <form className="form-horizontal">
	// <div className="form-group">
 //    <label className="control-label col-sm-2" for="topicSearch">Topic</label>
 //    <div className="col-sm-10">
 //      <input type="email" className="form-control" id="topic" placeholder="Enter email">
 //    </div>
 //  </div>
 //  <div className="form-group">
 //    <label className="control-label col-sm-2" for="startYear">Start Year</label>
 //    <div className="col-sm-10"> 
 //      <input type="password" className="form-control" id="startYr" placeholder="Enter password">
 //    </div>
 //  </div>
 //  <div className="form-group"> 
 //    <label className="control-label col-sm-offset-2 col-sm-10"
 //    for="endYear">End Year</label>
 //      <div className="col-sm-10">
 //    	<input type="" className="form-control" id=""
 //        <label><input type="checkbox"> Remember me</label>
 //      </div>
 //    </div>
 //  </div>
 //  <div class="form-group"> 
 //    <div class="col-sm-offset-2 col-sm-10">
 //      <button type="submit" class="btn btn-default">Submit</button>
 //    </div>
 //  </div>

	// </form>
	// </div>


	)
}
};

//Export Main to Index.js
export default Search;