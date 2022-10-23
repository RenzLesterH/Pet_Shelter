import React, { Component } from 'react';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 
import Add_pet from "./pages/add_pet";
import Edit_pet from "./pages/edit_pet";
import Home from "./pages/home";
import Records from "./pet_info.json";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: Records
    }
  }

   onclick = async (new_data) => {
    await this.setState(prevState => ({
      data: [...prevState.data, new_data]
    }))
  } 
   
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={this.state.data}/>}/>
          <Route path="/add-pet" element={<Add_pet handleOnClick={this.onclick} />}/>
          <Route path="/edit-pet" element={<Edit_pet pet_details={this.state.data}/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;