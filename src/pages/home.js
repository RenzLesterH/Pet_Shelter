import React, { Component } from "react";

/* Components */
import Navbar from "../components/navbar";
import Banner from "../components/banners";
import Main from "../components/pet_details";
import Footer from "../components/footer";
import Records from "../pet_info.json";

class Home extends Component {
  state = { 
    pets: Records
  } 
  render() {
    let { pets } = this.state;
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