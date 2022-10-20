import React, { Component } from "react";
import './stylesheets/navbar_style.scss';

class Navbar extends Component {
    // state = {  } 
    render() { 
        return (
            <header>
                <nav>
                  <ul>
                      <li id="brand_name"><a href='#'>PETSHELTER</a></li>
                      <li><a href='#'>Home</a></li>
                      <li><a href='#'>Services</a></li>
                      <li><a href='#'>Events</a></li>
                      <li id="add_pet_to_shelter"><a href='#'><i class="fas fa-plus-circle"></i>Add pet to Shelter</a></li>
                  </ul>
                </nav>
            </header>
        );
    }
}
 
export default Navbar;