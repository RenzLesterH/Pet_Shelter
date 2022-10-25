import React, { Component } from 'react';
import './stylesheets/styles.scss';
import './stylesheets/form_styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            pet_details: {
                id: this.props.setId+1,
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
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleOnClick(this.state.pet_details);
        event.target.reset();
        this.setState({
          pet_details: {
            ...this.state.pet_details,
            id: this.state.pet_details.id+1,
          },
        })
        this.props.showToast();
    };

    render() { 
        return (
          <section id="add_pet">
            <form method="post" onSubmit={this.handleOnSubmit}>
              <div>
                <label>Pet Name</label>
                <input
                  id="pet_name_input"
                  type="text"
                  name="pet_name"
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        name: event.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
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
                  onChange={(event) =>
                    this.setState({
                      pet_details: {
                        ...this.state.pet_details,
                        skill_1: event.target.value,
                      },
                    })
                  }
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