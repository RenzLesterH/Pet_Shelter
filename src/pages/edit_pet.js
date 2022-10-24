import React, { Component } from 'react';

/* Components */
import Footer from "../components/footer";
import Form from "../components/edit_form";
import Navbar from "../components/navbar_add_pet";

class Edit_pet extends Component {
    // state = {  } 
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Form pet_details={this.props} onUpdate={this.props.onUpdate} />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Edit_pet;