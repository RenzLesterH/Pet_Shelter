import React, { Component } from "react";

import 		"./stylesheets/styles.scss";
import 		"./stylesheets/form_styles.scss";

class Form extends Component {
	constructor(props) {
		super(props);
		/*
			DOCU: Some of the values of this object state pet_details is null and it will be only filled if 
			the event onChange is triggered and excute the method setPetValue. The value of id in this pet_details 
			object in state is the total lenght of the state data incremented by 1 in the App.js. pet_details type 
			default value is also set to Pig.     
		*/
		this.state = {
			pet_details: {
				id: this.props.setPetId + 1,
				name: null,
				type: "Pig",
				description: null,
				skill_1: null,
				skill_2: null,
				skill_3: null,
				likes: 0,
			}
		}
	}

	/** 
	*   DOCU: This method will set the new value of the state pet_details base on it's key. <br>
	*   This is triggered by the event onChange in line 79, 88, 101, 113, 120, 127.<br>
	*   Last updated at: October 26, 2022
	*   @param {string} pet_value is required to access event.target and get the value and key by pet_value.value and pet_value.name. 
	*	The pet_value.name represents a key in the object pet_details in state. It is use to set the pet_value.value into a 
	*   key in the object pet_details in state.
	*   @author Renz Lester
	*/
	setPetValue = (pet_value) => {
		this.setState({
			pet_details: {
				...this.state.pet_details,
				[pet_value.name]: pet_value.value,
			},
		})
	}

	/** 
	*   DOCU: This method will execute the props funtion handleOnAdd to pass the new state of pet_details. <br>
	*   This is triggered by the event onSubmit in line 72. <br>
	*   Last updated at: October 24, 2022
	*   @author Renz Lester
	*/
	handleOnSubmit = (event) => {
		event.preventDefault();
		this.props.handleOnAdd(this.state.pet_details);
		event.target.reset();

		/* This will set the state pet_details id value using the current value of this.state.pet_details.id incremented by 1. */
		this.setState({
			pet_details: {
				...this.state.pet_details,
				id: this.state.pet_details.id + 1,
			},
		})
		this.props.showToast();
	};

	render() {
		let pets = this.state.pet_details;
		return (
			<section id="add_pet">
				<form method="post" onSubmit={this.handleOnSubmit}>
					<div>
						<label>Pet Name</label>
						<input
							id="pet_name_input"
							type="text"
							name="name"
							onChange={(event) => this.setPetValue(event.target)}
							required
						/>
					</div>
					<div>
						<label>Pet Type</label>
						<select
							id="pet_type_select"
							name="type"
							onChange={(event) => this.setPetValue(event.target)}
							required
						>
							<option>Pig</option>
							<option>Dog</option>
							<option>Cat</option>
						</select>
					</div>
					<div>
						<label id="pet_desc_label">Description</label>
						<textarea
							id="pet_desc_textarea"
							name="description"
							onChange={(event) => this.setPetValue(event.target)}
							required
						>
							{" "}
						</textarea>
					</div>
					<div>
						<label>Skills</label>
						<input
							type="text"
							name="skill_1"
							id="skill_1"
							onChange={(event) => this.setPetValue(event.target)}
							required
						/>
						<input
							type="text"
							name="skill_2"
							className="pet_skills"
							onChange={(event) => this.setPetValue(event.target)}
							required
						/>
						<input
							type="text"
							name="skill_3"
							className="pet_skills"
							onChange={(event) => this.setPetValue(event.target)}
							required
						/>
					</div>
					<button type="submit">
						<i className="fas fa-upload"></i>Add Pet
					</button>
				</form>
			</section>
		);
	}
}

export default Form;