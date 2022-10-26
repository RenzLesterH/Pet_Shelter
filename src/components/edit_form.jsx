import React, { Component } from "react";

import    "./stylesheets/styles.scss";
import    "./stylesheets/edit_form_styles.scss";

class Form extends Component {
    constructor(props) {
        super(props);
        /*
          DOCU: The value of this state pet_details data represents to a specific pet, that was set
          by the props.active_pet_details.     
        */
        this.state = {
            pet_details: props.active_pet_details
        }
    }

  /** 
	*   DOCU: This method will set the updated value of the state pet_details base on it's key. <br>
	*   This is triggered by the event onChange in line 60, 74, 85, 93, 101. <br>
	*   Last updated at: October 26, 2022
	*   @param {string} pet_value is required to access event.target and get the value and key by pet_value.value and pet_value.name. 
	*	  The pet_value.name represents a key in the object pet_details in state. It is use to set the pet_value.value into a 
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
	*   DOCU: This method will execute the props funtion handleOnUpdate to pass the updated state of pet_details. <br>
	*   This is triggered by the event onSubmit in line 52. <br>
	*   Last updated at: October 24, 2022 
	*   @author Renz Lester
	*/
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleOnUpdate(this.state.pet_details);
        this.props.showToast();
    };

    render() {
        let pets = this.state.pet_details;
        return (
          <section id="edit_pet">
            <form method="post" onSubmit={this.handleOnSubmit}>
              <h5>Edit Details: {pets.name}</h5>
              <input type="hidden" name="id" defaultValue={pets.id} />
              <div>
                <label>Pet Type</label>
                <select
                  id="pet_type_select"
                  name="type"
                  onChange={(event) => this.setPetValue(event.target)}
                  defaultValue={pets.type}
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
                  name="description"
                  id="pet_desc_textarea"
                  onChange={(event) => this.setPetValue(event.target)}
                  defaultValue={pets.description}
                  required
                ></textarea>
              </div>
              <div>
                <label>Skills</label>
                <input
                  type="text"
                  name="skill_1"
                  id="skill_1"
                  onChange={(event) => this.setPetValue(event.target)}
                  defaultValue={pets.skill_1}
                  required
                />
                <input
                  type="text"
                  name="skill_2"
                  className="pet_skills"
                  onChange={(event) => this.setPetValue(event.target)}
                  defaultValue={pets.skill_2}
                  required
                />
                <input
                  type="text"
                  name="skill_3"
                  className="pet_skills"
                  onChange={(event) => this.setPetValue(event.target)}
                  defaultValue={pets.skill_3}
                  required
                />
              </div>
              <button type="submit">
                <i className="fas fa-save"></i>Save Changes
              </button>
            </form>
          </section>
        );
    }
}

export default Form;