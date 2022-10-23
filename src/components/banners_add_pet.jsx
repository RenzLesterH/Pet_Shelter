import React, { Component } from 'react';

import './stylesheets/styles.scss';
import './stylesheets/banner_add_pets_styles.scss';
import Pet_banner from './images/add_pet_banner.png';

class Banners extends Component {
    // state = {  } 
    render() { 
        return (
            <section id="add_pet_shelter_banner">
                <div id="add_pet_shelter_banner_moto">
                    <h1>Know a pet that needs a home?</h1>
                    <h5>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Neque id lorem nisi.
                    </h5>
                </div>
                <img src={Pet_banner} id="add_pet_shelter_banner" alt="pet_shelter_banner" />
            </section>
        );
    }
}
 
export default Banners;