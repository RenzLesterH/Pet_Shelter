import React, { Component } from "react";
import  {Link} from "react-router-dom";
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
                      <li id="back_to_home"><Link to='/'><i className="far fa-arrow-left"></i>Back to Home</Link></li>
                      <li id="add_pet_brand_name"><Link to='/'>PETSHELTER</Link></li>
                      <li id="add_pet_to_shelter"><Link to='add-pet'><i className="fas fa-plus-circle"></i>Add pet to Shelter</Link></li>
                  </ul>
                </nav>
            </header>
            </React.Fragment>
        );
    }
}
 
export default Navbar;