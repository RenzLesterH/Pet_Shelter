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

    updateLike = (pet_id) => {
        let pet = [...this.state.pets_data];
        pet.map(pet_item => {
        if (parseInt(pet_item.id) === parseInt(pet_id)) {
            pet_item.likes++;
            this.props.getName(pet_item.name);
        };

        });
        this.setState({ pet });
        this.props.showToast();
    };

    render() {
        let { pets_data, pet_data_index } = this.state;
        return (
            <React.Fragment>
                <main>
                    <h3>These pets are looking for a good home</h3>
                    <table>
                        <thead></thead>
                        <tbody>
                            {pets_data.map((pets) => (
                                <tr>
                                    <td className="pet_name" key={pets.name}>{pets.name}</td>
                                    <td className="pet_type" key={pets.type}>{pets.type}</td>
                                    <td>
                                        <button onClick={() => this.openModal(pets.id)}><i className="fas fa-clipboard-list"></i>Details</button>
                                        <Link to="/edit-pet" onClick={() => this.props.getId(pets.id)}><i className="fas fa-pen-square"></i>Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </main>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header className="border-bottom-0" closeButton>
                        <Modal.Title>Details about: {pets_data[pet_data_index].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table id="pet_details_modal">
                            <thead></thead>
                            <tbody>
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
                                    <td className="pet_details_value">{pets_data[pet_data_index].skill_1}  &bull;  {pets_data[pet_data_index].skill_2}  &bull;  {pets_data[pet_data_index].skill_3}</td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <h4>{pets_data[pet_data_index].likes} Likes</h4>
                        <Button onClick={() =>this.updateLike(pets_data[pet_data_index].id)} id="like_button"><i className="fas fa-heart"></i>Like {pets_data[pet_data_index].name}</Button>
                        <Button id="adopt_button"><i className="fas fa-home-alt"></i>Adopt {pets_data[pet_data_index].name}</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Pet_details;