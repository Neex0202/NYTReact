import React from 'react';

// IMPORT CHILDREN (Saved and Search)
import Search from './Search';

import helpers from '../utils/helpers';

//Ask question about creating front-end routes
//Axios (helper) vs Ajax

//Include RESULTS OF ARTICLE as PROP From Search

class Main extends React.Component {

	constructor(){  //exclusively for Main class
		super();  //Calls constructor of React.Component so we can override the Constructor


		this.state.children = {
			children:0 
		};

	}; //Closing Constructor

//Include componentDidMount() function
//Include console.log("Component Mounted") w/in CDM();
//MAKE AJAX CALL within ComponentDidMount()

// Create Result Component

render(){
return (
//HTML
<div>
<h1>Hi from Main Component</h1>
<Search childCount={this.state.children} name="Nico"/>




</div>


	)//Close Return
}//Close Render

}; //Close Class Main

//Export Main to Index.js
export default Main;