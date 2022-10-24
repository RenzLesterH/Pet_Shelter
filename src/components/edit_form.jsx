import React, { Component } from 'react';
import './stylesheets/styles.scss';
import './stylesheets/edit_form_styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            pet_details: {
                id: this.props.pet_details[this.props.pet_id].id,
                name: this.props.pet_details[this.props.pet_id].name,
                type: this.props.pet_details[this.props.pet_id].type,
                description: this.props.pet_details[this.props.pet_id].description,
                skill_1: this.props.pet_details[this.props.pet_id].skill_1,
                skill_2: this.props.pet_details[this.props.pet_id].skill_2,
                skill_3: this.props.pet_details[this.props.pet_id].skill_3,
            }
        }
    }

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
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        type: event.target.value,
                      },
                    })
                  }
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
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        description: event.target.value,
                      },
                    })
                  }
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
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        skill_1: event.target.value,
                      },
                    })
                  }
                  defaultValue={pets.skill_1}
                  required
                />
                <input
                  type="text"
                  name="pet_skill_2"
                  className="pet_skills"
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        skill_2: event.target.value,
                      },
                    })
                  }
                  defaultValue={pets.skill_2}
                  required
                />
                <input
                  type="text"
                  name="pet_skill_3"
                  className="pet_skills"
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        skill_3: event.target.value,
                      },
                    })
                  }
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