import React from 'react';

// IMPORT CHILDREN (Saved and Search)
import helpers from '../utils/helpers';
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
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear;



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


	//SET STATE TO CURRENT VIEW ie topic: "". 
	this.state = {
		topic: "",
		startYear: "",
		endyear: ""

	}

// handleChange = () => {

  
// }
//Search function 
// handleSearch = () => {


// }


		//Handle Change f(x) to set state of view so that we may use "new" states within our runSerach Function
    // handleChange: function(event) {

    //   var newState = {};
    //   newState[event.target.id] = event.target.value;
    //   this.setState(newState);
    // },


	}; //Closing Constructor

//Include componentDidMount() function

render(){
return(


  <div>
  <form>
  <label>Topic</label>
    <input className="form-control" id="topic" placeholder="Enter Topic" />
      
  <label>Start year</label>
 <input value={this.state.value} className="form-control " id="start" onBlur= {this.handleChange}/>
  <label>End year</label>
  <input value={this.state.value} className="form-control " id="end" onBlur= {this.handleChange}/>
  </form>
    


  </div>



	)
}
};

//Export Main to Index.js
export default Search;