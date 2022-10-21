import React, { Component } from "react";

import './stylesheets/styles.scss';

class Navbar extends Component {
    // state = {  } 
    render() { 
        return (
            <React.Fragment>
            <header>
                <nav>
                  <ul>
                      <li id="brand_name"><a href='/'>PETSHELTER</a></li>
                      <li class="nav_links"><a href='/'>Home</a></li>
                      <li class="nav_links"><a href='#'>Services</a></li>
                      <li class="nav_links"><a href='#'>Events</a></li>
                      <li id="add_pet_to_shelter"><a href='add-pet'><i class="fas fa-plus-circle"></i>Add pet to Shelter</a></li>
                  </ul>
                </nav>
            </header>
            </React.Fragment>
        );
    }
}
 
export default Navbar;