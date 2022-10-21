import React, { Component } from 'react';

/* Components */
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Form from "../components/form";

class Add_pet extends Component {
    // state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <Form />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Add_pet;