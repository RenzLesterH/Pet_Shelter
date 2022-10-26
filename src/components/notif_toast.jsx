import React, { Component } from "react";
import { ToastContainer } from "react-bootstrap";

import Toast from       "react-bootstrap/Toast";
import                  "./stylesheets/toast_style.scss";

class NotifToast extends Component {
    render() {
        const { showToast, hideToast, message} = this.props;
        return (
            <ToastContainer position="bottom-end">
                <Toast onClose={hideToast} show={showToast} delay={2500} autohide>
                <Toast.Body><i className="far fa-check"></i> {message}</Toast.Body>
            </Toast>
            </ToastContainer>  
        );
    }
}

export default NotifToast;