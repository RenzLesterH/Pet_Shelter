import React, { Component } from 'react';

class Form extends Component {
    // state = {  } 
    render() { 
        return (
            <section id="add_pet">
                <form action="">
                    <div>
                        <label>Pet Name</label>
                        <input id="pet_name_input" type="text" name="" />
                    </div>
                    <div>
                       <label>Pet Type</label> 
                        <select id="pet_type_select">
                            <option>Pig</option>
                            <option>Dog</option>
                            <option>Cat</option>
                        </select>
                    </div>
                    <div>
                        <label id="pet_desc_label">Description</label>
                        <textarea name="" id="pet_desc_textarea"></textarea>
                    </div>
                    <div>
                        <label>Skills</label>
                        <input type="text" name="" id="skill_1" />
                        <input type="text" class="pet_skills" name="" />
                        <input type="text" class="pet_skills" name="" />
                    </div>
                    <button type="submit"><i class="fas fa-upload"></i>Add Pet</button>
                </form>
            </section>
        );
    }
}
 
export default Form;