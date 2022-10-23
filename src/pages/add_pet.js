import React, { Component } from 'react';

/* Components */
import Navbar from "../components/navbar_add_pet";
import Banner from "../components/banners_add_pet";
import Footer from "../components/footer";
import Form from "../components/form";

class Add_pet extends Component {
    // state = {  } 
    render() {
        console.log("We are in add ", this.props); 
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Form handleOnClick={this.props.handleOnClick} />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Add_pet;