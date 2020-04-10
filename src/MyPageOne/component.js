import React, { Component } from 'react';

class UIComponent extends Component {

	constructor(props){
		super(props);	
		this.state = {
		    count : null
		}	
	}

	getUserList = (event) =>
	{
		console.log("UIComponent.js - getUserList() called");
		console.log("UIComponent.js - getUserList() called - this.props.getSth: " , this.props.getUserList);
		// call redux store function 
		// it will eventually update the Redux state and this UI will reflect the this.props.myCount change automatically
		this.props.getUserList();

		console.log("UIComponent.js - getUserList() called - this.props: " , this.props);

	}
	


	render() {
		return (
			<div>
				<h1>Docker demo - web</h1>
                <button onClick={this.getUserList}>get user list</button>

				{this.props.reduxState.MyPageOneState.users && 
				this.props.reduxState.MyPageOneState.users.map(user => (
					<div class="margin-auto">
					<div class="flex-container-flex-start">
					<div class="flex-container">
						<img class="myavatar" src='https://i.imgur.com/FEVDPBj.jpg' /> 
						<button class="ui basic button">{user.name}</button>
						<button class="ui basic button">{user.email}</button>					
					</div>
					</div>
					</div>
				))}

			</div>
		);
	}	
}


export default UIComponent;