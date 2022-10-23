import React, { Component } from 'react';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Add_pet from "./pages/add_pet";
import Home from "./pages/home";
import Records from "./pet_info.json";

class App extends Component {
  state = { 
    data: Records
  }
  onclick= () => {
    console.log("Hello!");
  } 
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={this.state.data}/>}/>
          <Route path="/add-pet" element={<Add_pet handleOnClick={this.onclick} />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;