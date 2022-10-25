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

	 /* this method set the state toast_show into true*/
	showToast = () => {
		this.setState({ toast_show: true })
	}

	/** 
    *   DOCU: This method returns the name of the pet and set it in the state liked with a concatination. <br>
	* 	This will then be use for the toast message. <br>
    *   This is triggered in the notif_toast component from line 48. <br>
    *   Last updated at: October 24, 2022
    *   @param {string} name_liked has the name of the pet and it is concatinate with "Likes" string, and set it in the state liked.
    *   @author Renz Lester
    */
	getName = (name_liked) => {
		this.setState({ liked: "Likes " + name_liked });
	}

	render() {
		let { pets } = this.state;
		return (
			<React.Fragment>
				<Navbar />
				<Banner />
				<Main pets_data={pets}
					getId={this.props.getId}
					showToast={this.showToast}
					getName={this.getName} />
				<NotificationToast
					showToast={this.state.toast_show}
					hideToast={() => this.setState({ toast_show: false })}
					message={this.state.liked}
				/>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;