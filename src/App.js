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
      data: Records,
      pet_id: 0
    }
  }

  onclick = async (new_data) => {
    await this.setState(prevState => ({
      data: [...prevState.data, new_data]
    }))
  }
  
  getId = (id) => {
    const index = this.state.data
      .map((object) => object.id)
      .indexOf(id);
    this.setState({ pet_id: index });
  }
   
  render() {
    console.log(this.state.data);
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={this.state.data} getId={this.getId}/>}/>
          <Route path="/add-pet" element={<Add_pet handleOnClick={this.onclick} setId={this.state.data.length}  />}/>
          <Route path="/edit-pet" element={<Edit_pet pet_details={this.state.data} pet_id={this.state.pet_id} />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;