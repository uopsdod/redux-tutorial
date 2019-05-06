import React, { Component } from 'react';


class UIComponent extends Component {

	constructor(props){
		super(props);	
		this.state = {
		    count : null
		}	
	}

	getSth = (event) =>
	{
		console.log("UIComponent.js - getSth() called");
		console.log("UIComponent.js - getSth() called - this.props.getSth: " , this.props.getSth);
		// call redux store function 
		// it will eventually update the Redux state and this UI will reflect the this.props.myCount change automatically
		this.props.getSth();

		console.log("UIComponent.js - getSth() called - this.props: " , this.props);

	}

	render() {
		return (
			<div>
				<h1>UIComponent - MyPageOne</h1>
                <button onClick={this.getSth}>getSth</button>
				<h3>stateFromReduxStore(this.props.myCount): {this.props.myCount}</h3>
				<h3>stateFromReduxStore(this.props): </h3>
				{JSON.stringify(this.props)}
			</div>
		);
	}	
}


export default UIComponent;