import React, { Component } from "react";

/* Components */
import Navbar from "../components/navbar";
import Banner from "../components/banners";
import Main from "../components/pet_details";
import Footer from "../components/footer";

class Home extends Component {
  state = { 
    pets: this.props.data
  } 
  render() {
    let { pets } = this.state;
    // console.log(this.props);
    return (
      <React.Fragment>
        <Navbar />
        <Banner/>
        <Main pets_data={pets}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;