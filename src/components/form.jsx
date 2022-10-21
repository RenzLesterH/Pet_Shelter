import React, { Component } from 'react';

class Form extends Component {
    // state = {  } 
    render() { 
        return (
            <section id="add_pet">
                <form method="post">
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
                        <input type="text" name="pet_skill_2" class="pet_skills" required />
                        <input type="text" name="pet_skill_3" class="pet_skills" required />
                    </div>
                    <button type="submit"><i class="fas fa-upload"></i>Add Pet</button>
                </form>
            </section>
        );
    }
}
 
export default Form;