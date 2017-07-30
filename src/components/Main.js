import React from 'react';

// IMPORT CHILDREN (Saved and Search)
import Search from './Search';
import Form from '../form.jsx';
import Results from './Results';
import axios from 'axios';

import helpers from '../utils/helpers';

//Ask question about creating front-end routes
//Axios (helper) vs Ajax

//Include RESULTS OF ARTICLE as PROP From Search



class Main extends React.Component {

	constructor(){  //exclusively for Main class
		super();  //Calls constructor of React.Component so we can override the Constructor

    this.state= {
      searchResults: []
    }

	}; //Closing Constructor

//Include componentDidMount() function
//Include console.log("Component Mounted") w/in CDM();
//MAKE AJAX CALL within ComponentDidMount()

// Create Result Component


makeRequest = (topic, startYear, endYear) => {
  console.log("Make Req F(x)");
  console.log(this.state);

  // var apiKey = "450688d465524dce95edd99b25bb0a1b";
  // // 1) get Search Parameters
  // // 2) make request to NYT with search parameters
  // // 3) update the state.searchResults with response from NYT
  // // 4) axios.get
  // axios.get(("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
  // 	+ apiKey + "q=" + topic + "&begin_date" + startYear + "&0101&end_date"
  // 	 + endYear + "0101")).then(function(response){
  // 	console.log(response)
  // })
helpers.nytQuery(topic, startYear, endYear)
	.then(function(response) {
		console.log(response)
		var results = [];
		var responseResults = response.data.response.docs;//.docs
		var counter = 0;

		console.log("RESPONSE RESULTS:")
		console.log("RESPONSE RESULTS:")
		console.log("RESPONSE RESULTS:")

		for(var i = 0; i < 5; i++) {
			
			if (responseResults[counter].headline.main && responseResults[counter].pub_date && responseResults[counter].web_url){
				results.push(responseResults[counter]);	
			}
		}
		// 		// console.log(responseResults);
		this.setState({searchResults: results})

		//ask allan about this error
		// console.log("state:" + {this.state.searchResults})

		console.log("this.State.results:")
		console.log(this.state.searchResults)
		console.log("-----------------------")
		console.log("-----------------------")
		console.log("results from axios.get")
		//array of objects
		console.log(results);
		// return results;
	}.bind(this))
}

render(){
return (
//HTML





      <div className="main-container">


        <div className="container">

 
             <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
          </div>

       
			<Search name="Nico"
			makeRequest={this.makeRequest} />

        </div>
{/*
    	<Results 
      		searchResults = {this.state.searchResults}
      	/>*/}

     {/*   <Form  makeRequest={this.makeRequest}/> */}




 	<div className="panel panel-default">
   	 <div className="panel-body">
{/* <Results  
 {this.state.searchResults}/>*/}
 			<Results searchResults={this.state.searchResults}/>
   	</div>
  </div>

      </div> //closing MAIN CONTAINER









	)//Close Return
}//Close Render
}; //Close Class Main


//Export Main to Index.js
export default Main;