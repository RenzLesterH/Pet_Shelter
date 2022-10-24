import React, { Component } from 'react';
import './stylesheets/styles.scss';
import './stylesheets/edit_form_styles.scss';
import Pet_details from './pet_details';

class Form extends Component {
    // state = {  }

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //         pet_details: props.pet_details
    //     }
    //   }

    constructor(props) {
        super(props);
    
        this.state = {
            pet_details: {
                id: null,
                type: null,
                description: data_form.pet_desc.value,
                skill_1: data_form.pet_skill_1.value,
                skill_2: data_form.pet_skill_2.value,
                skill_3: data_form.pet_skill_3.value,
            }
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let data_form = event.target;
        // this.props.onUpdate({
        //     id: event.target.pet_id.value,
        //     type: data_form.pet_type.value,
        //     description: data_form.pet_desc.value,
        //     skill_1: data_form.pet_skill_1.value,
        //     skill_2: data_form.pet_skill_2.value,
        //     skill_3: data_form.pet_skill_3.value,
        // });

        this.props.onUpdate(this.state.pet_details);
    };

    render() {
        let pets_data = this.props.pet_details.pet_details;
        let pets_id = this.props.pet_details.pet_id;
        return (
            <section id="edit_pet">
                <form method="post" onSubmit={this.handleOnSubmit}>
                    <h5>Edit Details: {pets_data[pets_id].name}</h5>
                    <input type="hidden" name="pet_id" defaultValue={pets_data[pets_id].id} />
                    <div>
                        <label>Pet Type</label>
                        <select id="pet_type_select"
                                name="pet_type"
                                onChange={(event)=> this.setState({
                                    pet_details: {                   // object that we want to update
                                        ...this.state.pet_details,    // keep all other key-value pairs
                                        pet_type: event.target.value       // update the value of specific key
                                    }
                                    })}
                                defaultValue={pets_data[pets_id].type}
                                required>
                            <option>Pig</option>
                            <option>Dog</option>
                            <option>Cat</option>
                        </select>
                    </div>
                    <div>
                        <label id="pet_desc_label">Description</label>
                        <textarea name="pet_desc" id="pet_desc_textarea" defaultValue={pets_data[pets_id].description} required></textarea>
                    </div>
                    <div>
                        <label>Skills</label>
                        <input type="text" name="pet_skill_1" id="skill_1" defaultValue={pets_data[pets_id].skill_1} required />
                        <input type="text" name="pet_skill_2" className="pet_skills" defaultValue={pets_data[pets_id].skill_2} required />
                        <input type="text" name="pet_skill_3" className="pet_skills" defaultValue={pets_data[pets_id].skill_3} required />
                    </div>
                    <button type="submit"><i className="fas fa-save"></i>Save Changes</button>
                </form>
            </section>
        );
    }
}

export default Form;