import React, { Component } from 'react';
import './stylesheets/styles.scss';
import './stylesheets/form_styles.scss';

class Form extends Component {
    // state = {  }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        let data_form = event.target;
        this.props.handleOnClick({
          id: this.props.setId+1,
          name: data_form.pet_name.value,
          type: data_form.pet_type.value,
          description: data_form.pet_desc.value,
          skill_1: data_form.pet_skill_1.value,
          skill_2: data_form.pet_skill_2.value,
          skill_3: data_form.pet_skill_3.value,
        });
        data_form.pet_name.value = "";
        data_form.pet_type.value = "";  
        data_form.pet_desc.value = "";
        data_form.pet_skill_1.value = "";
        data_form.pet_skill_2.value = "";
        data_form.pet_skill_3.value = "";
    };

    render() { 
        return (
            <section id="add_pet">
                <form method="post" onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Pet Name</label>
                        <input id="pet_name_input" type="text" name="pet_name" required/>
                    </div>
                    <div>
                       <label>Pet Type</label> 
                        <select id="pet_type_select" name="pet_type" required>
                            <option>Pig</option>
                            <option>Dog</option>
                            <option>Cat</option>
                        </select>
                    </div>
                    <div>
                        <label id="pet_desc_label">Description</label>
                        <textarea name="pet_desc" id="pet_desc_textarea" required></textarea>
                    </div>
                    <div>
                        <label>Skills</label>
                        <input type="text" name="pet_skill_1" id="skill_1" required />
                        <input type="text" name="pet_skill_2" className="pet_skills" required />
                        <input type="text" name="pet_skill_3" className="pet_skills" required />
                    </div>
                    <button type="submit"><i className="fas fa-upload"></i>Add Pet</button>
                </form>
            </section>
        );
    }
}
 
export default Form;