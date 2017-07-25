import React from 'react';

// IMPORT CHILDREN (Saved and Search)
import Search from './Search';
import Form from '../form.jsx';

import helpers from '../utils/helpers';

//Ask question about creating front-end routes
//Axios (helper) vs Ajax

//Include RESULTS OF ARTICLE as PROP From Search

class Main extends React.Component {

	constructor(){  //exclusively for Main class
		super();  //Calls constructor of React.Component so we can override the Constructor

    this.state= {
      searchResults: [];
    }

	}; //Closing Constructor

//Include componentDidMount() function
//Include console.log("Component Mounted") w/in CDM();
//MAKE AJAX CALL within ComponentDidMount()

// Create Result Component


makeRequest = (topic, firstName, lastName) => {
  console.log("Make Req F(x)");
  console.log(this.state);

  // 1) get Search Parameters
  // 2) make request to NYT with search parameters
  // 3) update the state.searchResearch with response from NYT
  // 4) axios.get
}

render(){
return (
//HTML





      <div className="main-container">


        <div className="container">

 
             <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
          </div>

       
			<Search name="Nico" />

        </div>

        <Form  makeRequest={this.makeRequest}/>
      </div>









	)//Close Return
}//Close Render
}; //Close Class Main


//Export Main to Index.js
export default Main;