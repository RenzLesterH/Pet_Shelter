import React, { Component } from 'react';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Add_pet from "./pages/add_pet";
import Home from "./pages/home";

class App extends Component {
  state = { 
    data:0
  }
  onclick= () => {
    console.log("Hello!");
  } 
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={123}/>}/>
          <Route path="/add-pet" element={<Add_pet handleOnClick={this.onclick} />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;