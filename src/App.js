import React, { Component } from "react";

import Navbar from "./components/navbar";
import Main from "./components/pet_details";

class App extends Component {
  // state = {  } 
  render() { 
    return (
      <React.Fragment>
           <Navbar/>
           <Main/>
      </React.Fragment>
    );
  }
}
 
export default App;