import React, { Component } from 'react';

import './stylesheets/pet_details.scss';
import './stylesheets/styles.scss';

class Pet_details extends Component {
    state = {
        pets_data: this.props.pets_data
     } 
    render() {
        let { pets_data } = this.state;
        return (
            <main>
                <h3>These pets are looking for a good home</h3>
                <table>
                {pets_data.map((pets) => (
                    <tr>
                        <td className="pet_name" key={pets.name}>{pets.name}</td>
                        <td className="pet_type" key={pets.type}>{pets.type}</td>
                        <td>
                            <a href="#"><i className="fas fa-clipboard-list"></i>Details</a>
                            <a href="/edit-pet"><i className="fas fa-pen-square"></i>Edit</a>
                        </td>
                    </tr>
                ))}
                </table>
            </main>
        );
    }
}
 
export default Pet_details;