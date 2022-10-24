import React, { Component } from "react";

/* Components */
import Banner from "../components/banners";
import Footer from "../components/footer";
import Main from "../components/pet_details";
import Navbar from "../components/navbar";
import NotificationToast from "../components/notif_toast";

class Home extends Component {
	state = {
		pets: this.props.data,
		toast_show: false,
		liked: null
	}

	showToast = () => {
        this.setState({ toast_show: true })
    }

	getName = (name_liked) => {
		this.setState({ liked: "Likes "+name_liked });
	}

	render() {
		let { pets } = this.state;
		return (
			<React.Fragment>
				<Navbar />
				<Banner />
				<Main pets_data={pets} getId={this.props.getId} showToast={this.showToast}  getName={this.getName}/>
				<NotificationToast
                    showToast={this.state.toast_show}
                    hideToast={() => this.setState({ toast_show: false })}
                    message= {this.state.liked}
                />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;