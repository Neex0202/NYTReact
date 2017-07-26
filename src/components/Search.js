import React from 'react';

// IMPORT CHILDREN (Saved and Search)
import helpers from '../utils/helpers';
import axios from 'axios';
//INCLUDE AJAX CALL FROM NYT API

var apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


//Base URL to use in AJAX CALL to grab Articles
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear;
	this.state = {
		topic:"",
		// firstName: "",
		// lastName: "",
		startYear:"",
		endyear: ""

	}


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
		endYear: ""

	}

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
	handleChange = event => {
		console.log(event.target.value);
		console.log(event.target.id);
		// alert("HandleChange")
		this.setState({
			[event.target.id] : event.target.value


		});

		console.log(this.state.firstName);
	}
  

  handleSubmit = event => {
		event.preventDefault();
		console.log("handleSubmit fire")
		console.log(this.state);
		this.props.makeRequest(this.state.topic, this.state.firstName, this.state.lastName);

		//include axios.get call with NYT API
		//results from call > pass to Main, as a prop

	}

render(){
return(


  <div>
  <form>

    <label htmlFor = "topic" >Topic </label>
			<input type ="type" id="topic" value={this.state.topic}
			onChange={this.handleChange}/>
			<label htmlFor = "startYr">StartYear: </label>
			<input type ="type" id="startYear" value={this.state.startYear}
			onChange={this.handleChange}/>
			<label htmlFor = "endYr">EndYear: </label>
			<input type ="type" id="endYear" value={this.state.endYear}
			onChange={this.handleChange}/>

			<button type="button" className="btn btn-primary" onClick={this.handleSubmit}> Submit </button>

  </form>


  </div>



	)
}
};

//Export Main to Index.js
export default Search;
 //  <label htmlFor = "topic">Topic</label>
 //  <input type ="text" className="" id="topic" placeholder="Enter Topic" value ={this.state.topic} onChange= {this.handleChange}/>
      
 //  <label>Start year</label>
 // <input type ="number" value={this.state.startYear} className="" id="start" onChange= {this.handleChange}/>
 //  <label>End year</label>
 //  <input type ="number" value={this.state.endyear} className="" id="end" onChange= {this.handleChange}/>