import React, { Component } from "react";

import Navbar from "./components/navbar";
import Main from "./components/pet_details";
import Footer from "./components/footer";

class App extends Component {
  // state = {  } 
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;