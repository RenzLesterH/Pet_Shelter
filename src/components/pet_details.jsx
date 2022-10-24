import React, { Component } from 'react';
import  {Link} from "react-router-dom";

import './stylesheets/pet_details.scss';
import './stylesheets/styles.scss';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Pet_details extends Component {
    state = {
        pets_data: this.props.pets_data,
        isOpen: false
     }
     
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        let { pets_data } = this.state;
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
                            <Link onClick={this.openModal}><i className="fas fa-clipboard-list"></i>Details</Link>
                            <Link to="/edit-pet" onClick={() => this.props.getId(pets.id)}><i className="fas fa-pen-square"></i>Edit</Link>
                        </td>
                    </tr>
                ))}
                </table>
            </main>
             <Modal show={this.state.isOpen} onHide={this.closeModal}>
             <Modal.Header className="border-bottom-0" closeButton>
                 <Modal.Title>Details about:</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <table id="pet_details_modal">
                     <tr>
                         <td className="pet_details_label">Pet Type</td>
                         <td className="pet_details_value">Cat</td>
                     </tr>
                     <tr>
                         <td className="pet_details_label">Description</td>
                         <td className="pet_details_value">Hates Mondays</td>
                     </tr>
                     <tr>
                         <td className="pet_details_label">Skills</td>
                         <td className="pet_details_value">Eating  •  Sleeping  •  Slacking off</td>
                     </tr>
                 </table>
             </Modal.Body>
             <Modal.Footer>
                <h4>0Likes</h4>
                <Button id="like_button"><i class="fas fa-heart"></i>Like</Button>
                <Button id="adopt_button"><i class="fas fa-home-alt"></i>Adopt Changes</Button>
            </Modal.Footer>
         </Modal>
        </React.Fragment>            
        );
    }
}
 
export default Pet_details;