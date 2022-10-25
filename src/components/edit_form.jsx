import React, { Component } from 'react';
import './stylesheets/styles.scss';
import './stylesheets/edit_form_styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);

        /*
          DOCU: The value of this state pet_details data represents to a specific pet. This is set by using 
          this.props.pet.details and it's index is identified using this.props.pet_index. This will change if 
          onchange event is triggered and executed the method setPetValue.     
        */
        this.state = {
            pet_details: {
                id: this.props.pet_details[this.props.pet_index].id,
                name: this.props.pet_details[this.props.pet_index].name,
                type: this.props.pet_details[this.props.pet_index].type,
                description: this.props.pet_details[this.props.pet_index].description,
                skill_1: this.props.pet_details[this.props.pet_index].skill_1,
                skill_2: this.props.pet_details[this.props.pet_index].skill_2,
                skill_3: this.props.pet_details[this.props.pet_index].skill_3,
            }
        }
    }

  /** 
	*   DOCU: This method will set the updated value of the state pet_details base on it's key. <br>
	*   This is triggered by the event onChange in line 69, 83, 94, 102, 110<br>
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
	*   DOCU: This method will execute the props funtion onUpdate to pass the updated state of pet_details. <br>
	*   This is triggered by the event onSubmit in line 61. <br>
	*   Last updated at: October 24, 2022
	*   @author Renz Lester
	*/
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.onUpdate(this.state.pet_details);
        this.props.showToast();
    };

    render() {
        let pets = this.state.pet_details;
        return (
          <section id="edit_pet">
            <form method="post" onSubmit={this.handleOnSubmit}>
              <h5>Edit Details: {pets.name}</h5>
              <input type="hidden" name="pet_id" defaultValue={pets.id} />
              <div>
                <label>Pet Type</label>
                <select
                  id="pet_type_select"
                  name="pet_type"
                  onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[2] )}
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
                  name="pet_desc"
                  id="pet_desc_textarea"
                  onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[3])}
                  defaultValue={pets.description}
                  required
                ></textarea>
              </div>
              <div>
                <label>Skills</label>
                <input
                  type="text"
                  name="pet_skill_1"
                  id="skill_1"
                  onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[4])}
                  defaultValue={pets.skill_1}
                  required
                />
                <input
                  type="text"
                  name="pet_skill_2"
                  className="pet_skills"
                  onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[5])}
                  defaultValue={pets.skill_2}
                  required
                />
                <input
                  type="text"
                  name="pet_skill_3"
                  className="pet_skills"
                  onChange={(event) => this.setPetValue(event.target.value, Object.keys(pets)[6])}
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