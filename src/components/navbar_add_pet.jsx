import React, { Component } from "react";

import './stylesheets/styles.scss';
import './stylesheets/navbar_add_pet_styles.scss';

class Navbar extends Component {
    // state = {  } 
    render() { 
        return (
            <React.Fragment>
            <header>
                <nav>
                  <ul>
                      <li id="back_to_home"><a href='/'><i class="far fa-arrow-left"></i>Back to Home</a></li>
                      <li id="add_pet_brand_name"><a href='/'>PETSHELTER</a></li>
                      <li id="add_pet_to_shelter"><a href='add-pet'><i className="fas fa-plus-circle"></i>Add pet to Shelter</a></li>
                  </ul>
                </nav>
            </header>
            </React.Fragment>
        );
    }
}
 
export default Navbar;