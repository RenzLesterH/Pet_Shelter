import React, { Component } from 'react';

import 		'./stylesheets/styles.scss';
import 		'./stylesheets/form_styles.scss';

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
	*   This is triggered by the event onChange in line 78, 87, 100, 112, 119, 126.<br>
	*   Last updated at: October 24, 2022
	*   @param {string} pet_value is required to pass the value of an input form to the key of an object pet_details in state.
	*   @param {object key} pet_key represents a key in the object pet_details in state. It is use to set the pet_value into a 
	*   key in the object pet_details in state.
	*   @author Renz Lester
	*/
	setPetValue = (pet_value, pet_key) => {
		this.setState({
			pet_details: {
				...this.state.pet_details,
				[pet_key]: pet_value,
			},
		})
	}

	/** 
	*   DOCU: This method will execute the props funtion handleOnAdd to pass the new state of pet_details. <br>
	*   This is triggered by the event onSubmit in line 71. <br>
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
							name="pet_name"
							onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[1])}
							required
						/>
					</div>
					<div>
						<label>Pet Type</label>
						<select
							id="pet_type_select"
							name="pet_type"
							onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[2])}
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
							name="pet_desc"
							id="pet_desc_textarea"
							onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[3])}
							required
						>
							{" "}
						</textarea>
					</div>
					<div>
						<label>Skills</label>
						<input
							type="text"
							name="pet_skill_1"
							id="skill_1"
							onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[4])}
							required
						/>
						<input
							type="text"
							name="pet_skill_2"
							className="pet_skills"
							onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[5])}
							required
						/>
						<input
							type="text"
							name="pet_skill_3"
							className="pet_skills"
							onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[6])}
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