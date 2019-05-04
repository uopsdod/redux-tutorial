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
		// redux store function 
		this.props.getSth();
		// TODO: make it wait for the result somehow ... some asyn stuff required 
		console.log("UIComponent.js - getSth() this.props: " , this.props);
		console.log("UIComponent.js - getSth() this.props.MyPageOneState: " , this.props.MyPageOneState);
		
		this.setState({
			count : this.props.myCount
		});
	}

	render() {

		return (
			<div>
				<h1>UIComponent</h1>
                <button onClick={this.getSth}>getSth</button>
				<h3>stateFromReduxStore: {this.state.count}</h3>
				{/* <h3>State from Redux store : {this.state}</h3> */}
			</div>
		);
	}	
}


export default UIComponent;