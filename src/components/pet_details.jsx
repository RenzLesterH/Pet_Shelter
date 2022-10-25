import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './stylesheets/pet_details.scss';
import './stylesheets/styles.scss';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Pet_details extends Component {
    /*
		DOCU: The state pet_data_index temporary default value is 0, because it is the index of the destructor 
        pets_data in viewing the details of an specific pet.   
	*/
    state = {
        pets_data: this.props.pets_data,
        isOpen: false,
        pet_data_index: 0
    }

    /** 
    *   DOCU: This will view a specific pets info in a modal by returning first the id of an pet, get it's index and use the index to set the state pet_data_index. <br>
    *   This is triggered in this component by onClick event from line 60 <br>
    *   Last updated at: October 24, 2022
    *   @param {number} pets_id has the id of the pet and it is use to find the index of this pet.
    *   @author Renz Lester
    */
    openModal = (pets_id) => {
        this.setState({ isOpen: true })
        const pet_index = this.state.pets_data
            .map((pet) => pet.id)
            .indexOf(pets_id);
        this.setState({ pet_data_index: pet_index });
    };

    closeModal = () => this.setState({ isOpen: false });

    /** 
    *   DOCU: This method will increment the number of likes of an specific pet. <br>
    *   This is triggered in this component by an onClick event from line 130 <br>
    *   Last updated at: October 24, 2022
    *   @param {number} pets_id has the id of the pet and it is use to update the number of likes of a pet.
    *   @author Renz Lester
    */
    updateLike = (pet_id) => {
        /* This will find the id of the pet and increment it's current value when it matches */
        let pet = [...this.state.pets_data];
        pet.map(pet_item => {
            if (parseInt(pet_item.id) === parseInt(pet_id)) {
                pet_item.likes++;
                 /* Props method getPetName is also invoke here to give the name of the pet for the toast message.
                 *  It will be used in the getPetName method in home.jsx pages. */
                this.props.getPetName(pet_item.name);
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
                                        <button onClick={() => this.openModal(pets.id)}> <div id="details_icon"></div>Details</button>
                                        <Link to="/edit-pet" onClick={() => this.props.getPetId(pets.id)}><div id="edit_icon"></div>Edit</Link>
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
                        <Button id="adopt_button"> <div id="home_icon"></div>Adopt {pets_data[pet_data_index].name}</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Pet_details;