import React, { Component } from "react";
import  {Link} from "react-router-dom";

import      "./stylesheets/styles.scss";
import      "./stylesheets/navbar_styles.scss";

class Navbar extends Component {
    // state = {  } 
    render() { 
        return (
            <React.Fragment>
            <header>
                <nav>
                  <ul>
                      <li id="brand_name"><Link to='/'>PETSHELTER</Link></li>
                      <li className="nav_links"><Link to='/'>Home</Link></li>
                      <li className="nav_links"><Link to='#'>Services</Link></li>
                      <li className="nav_links"><Link to='#'>Events</Link></li>
                      <li id="add_pet_to_shelter"><Link to='add-pet'><i className="fas fa-plus-circle"></i>Add pet to Shelter</Link></li>
                  </ul>
                </nav>
            </header>
            </React.Fragment>
        );
    }
}
 
export default Navbar;