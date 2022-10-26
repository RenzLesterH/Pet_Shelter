import React, { Component } from 'react';

/* Components */
import Footer from                  "../components/footer";
import Form from                    "../components/edit_form";
import Navbar from                  "../components/navbar_add_pet";
import NotificationToast from       "../components/notif_toast";

class Edit_pet extends Component {
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
                <Form 
                    active_pet_details={this.props.active_pet_details}
                    handleOnUpdate={this.props.handleOnUpdate} 
                    showToast={this.showToast} />
                <NotificationToast
                    showToast={this.state.toast_show}
                    hideToast={() => this.setState({ toast_show: false })}
                    message="Saved Changes."
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Edit_pet;