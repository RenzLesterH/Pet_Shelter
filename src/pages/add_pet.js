import React, { Component } from 'react';

/* Components */
import Banner from "../components/banners_add_pet";
import Footer from "../components/footer";
import Form from "../components/form";
import Navbar from "../components/navbar_add_pet";
import NotificationToast from "../components/notif_toast";

class Add_pet extends Component {
    state = {
        toast_show: false
    }

    showToast = () => {
        this.setState({ toast_show: true })
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Form 
                    handleOnAdd={this.props.handleOnClick}
                    setId={this.props.setId}
                    showToast={this.showToast} />
                <NotificationToast
                    showToast={this.state.toast_show}
                    hideToast={() => this.setState({ toast_show: false })}
                    message="New Pet Saved."
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Add_pet;