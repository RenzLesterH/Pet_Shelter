import React, { Component } from 'react';

import                      './stylesheets/styles.scss';
import                      './stylesheets/banner_styles.scss';
import Pet_banner from      './images/banner.png';

class Banners extends Component {
    // state = {  } 
    render() { 
        return (
            <section id="pet_shelter_banner">
                <div id="pet_shelter_banner_moto">
                    <h1>Let's <span>Adopt</span> Don't <span>Shop</span> </h1>
                    <h5>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Neque id lorem nisi.
                    </h5>
                </div>
                <img src={Pet_banner} id="pet_shelter_banner" alt="pet_shelter_banner" />
            </section>
        );
    }
}
 
export default Banners;