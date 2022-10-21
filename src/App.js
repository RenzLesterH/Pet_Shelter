import React, { Component } from 'react';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Add_pet from "./pages/add_pet";
import Home from "./pages/home";

class App extends Component {
  // state = {  } 
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-pet" element={<Add_pet />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;