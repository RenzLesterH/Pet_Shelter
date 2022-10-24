import React, { Component } from 'react';

/* Components */
import Navbar from "../components/navbar_add_pet";
import Banner from "../components/banners_add_pet";
import NotificationToast from "../components/notif_toast";
import Footer from "../components/footer";
import Form from "../components/form";

class Add_pet extends Component {
    state = { 
        toast_show: true
     }
     
     showToast = () => {
        this.setState({toast_show: true})
     }
    render() {
        // console.log("We are in add ", this.props); 
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Form handleOnClick={this.props.handleOnClick} setId={this.props.setId} showToast={this.showToast}/>
                <NotificationToast
                    showToast = {this.state.toast_show}
                    hideToast = {() =>this.setState({toast_show: false})}
                    message = "Added Successfully." 
                 />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Add_pet;