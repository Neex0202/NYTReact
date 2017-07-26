import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

constructor(){
	super();

	this.state = {
		topic:"",
		firstName: "",
		lastName: "",
		startYear:"",
		endyear: ""

	}


}

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
	return (

		<div>Hi, I'm the form 

		<form>
			<label htmlFor = "firstName" >First Name: </label>
			<input type ="type" id="firstName" value={this.state.firstName}
			onChange={this.handleChange}/>
			<label htmlFor = "lastName">Last Name: </label>
			<input type ="type" id="lastName" value={this.state.lastName}
			onChange={this.handleChange}/>
			<button onClick={this.handleSubmit}> Submit </button>



		</form>

		
	</div>
		)
} //End Render


}; //close  class Form

export default Form