import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './stylesheets/pet_details.scss';
import './stylesheets/styles.scss';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Pet_details extends Component {
    state = {
        pets_data: this.props.pets_data,
        isOpen: false,
        pet_data_index: 0
    }

    openModal = (pet_id) => {
        this.setState({ isOpen: true })
        const index = this.state.pets_data
            .map((object) => object.id)
            .indexOf(pet_id);
        this.setState({ pet_data_index: index });
    };

    closeModal = () => this.setState({ isOpen: false });

    render() {
        let { pets_data, pet_data_index } = this.state;
        return (
            <React.Fragment>
                <main>
                    <h3>These pets are looking for a good home</h3>
                    <table>
                        {pets_data.map((pets) => (
                            <tr>
                                <td className="pet_name" key={pets.name}>{pets.name}</td>
                                <td className="pet_type" key={pets.type}>{pets.type}</td>
                                <td>
                                    {/* change it later */}
                                    <button onClick={() => this.openModal(pets.id)}><i className="fas fa-clipboard-list"></i>Details</button>
                                    <Link to="/edit-pet" onClick={() => this.props.getId(pets.id)}><i className="fas fa-pen-square"></i>Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </table>
                </main>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header className="border-bottom-0" closeButton>
                        <Modal.Title>Details about: {pets_data[pet_data_index].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table id="pet_details_modal">
                            <tr>
                                <td className="pet_details_label">Pet Type</td>
                                <td className="pet_details_value">{pets_data[pet_data_index].type}</td>
                            </tr>
                            <tr>
                                <td className="pet_details_label">Description</td>
                                <td className="pet_details_value">{pets_data[pet_data_index].description}</td>
                            </tr>
                            <tr>
                                <td className="pet_details_label">Skills</td>
                                <td className="pet_details_value">{pets_data[pet_data_index].skill_1}  •  {pets_data[pet_data_index].skill_2}  •  {pets_data[pet_data_index].skill_3}</td>
                            </tr>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <h4>0 Likes</h4>
                        <Button id="like_button"><i class="fas fa-heart"></i>Like {pets_data[pet_data_index].name}</Button>
                        <Button id="adopt_button"><i class="fas fa-home-alt"></i>Adopt {pets_data[pet_data_index].name}</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Pet_details;