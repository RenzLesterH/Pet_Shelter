import React, { Component } from 'react';
import './stylesheets/styles.scss';

class Pet_details extends Component {
    // state = {  } 
    render() { 
        return (
            <main>
                <h3>These pets are looking for a good home</h3>
                <table>
                    <tr>
                        <td className="pet_name">Garfied</td>
                        <td class="pet_type">Cat</td>
                        <td>
                            <button><i class="fas fa-clipboard-list"></i>Details</button>
                            <button><i className="fas fa-pen-square"></i>Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="pet_name">Doraemon</td>
                        <td class="pet_type">Cat</td>
                        <td>
                            <button><i class="fas fa-clipboard-list"></i>Details</button>
                            <button><i className="fas fa-pen-square"></i>Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="pet_name">Snoopy</td>
                        <td class="pet_type">Dog</td>
                        <td>
                            <button><i class="fas fa-clipboard-list"></i>Details</button>
                            <button><i className="fas fa-pen-square"></i>Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="pet_name">Dug</td>
                        <td class="pet_type">Dog</td>
                        <td>
                            <button><i class="fas fa-clipboard-list"></i>Details</button>
                            <button><i className="fas fa-pen-square"></i>Edit</button>
                        </td>
                    </tr>
                </table>
            </main>
        );
    }
}
 
export default Pet_details;