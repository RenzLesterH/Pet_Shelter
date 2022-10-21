import React, { Component } from 'react';
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
                        <td class="pet_type" key={pets.type}>{pets.type}</td>
                        <td>
                            <button><i class="fas fa-clipboard-list"></i>Details</button>
                            <button><i className="fas fa-pen-square"></i>Edit</button>
                        </td>
                    </tr>
                ))}
                </table>
            </main>
        );
    }
}
 
export default Pet_details;