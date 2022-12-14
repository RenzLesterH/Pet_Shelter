import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages and Json file. */
import AddPet from      "./pages/add_pet";
import EditPet from     "./pages/edit_pet";
import Home from        "./pages/home";
import Records from     "./pet_info.json";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: Records,
            pet_id: 0,
            active_pet_details: {}
        }
    }
 
    /** 
    *   DOCU: This method adds new sets of array object in the state data. <br>
    *   Triggered in the form component by a onSubmit and triggered the function handleOnSubmit from line 53-66 <br>
    *   Last updated at: October 23, 2022
    *   @param {object} new_data passes a set of array object of an new pet to add in the state data.
    *   @author Renz Lester
    */
    handleOnAdd = async (new_data) => {
        await this.setState(prevState => ({
            data: [...prevState.data, new_data]
        }));
    }

    /** 
    *   DOCU: This method returns an id of an pet and use it to get the details of the pet and set it into the state active_pet_detail. <br>
    *   This is triggered in the pet_details component by a onClick from line 74 <br>
    *   Last updated at: October 26, 2022
    *   @param {number} pets_id has the id of the pet and it is use to find the index of this pet.
    *   @author Renz Lester
    */
    getPetId = (pets_id) => {
        let active_pet_detail = this.state.data.filter( pet_item => pet_item.id === pets_id)[0];
        this.setState({ active_pet_details: active_pet_detail });
    }

    /** 
    *   DOCU: This method updates the specific pet information in the state data by its id. <br>
    *   This is triggered in the edit_form component by a onSubmit from line 52 and trigger the function handleOnSubmit from line 42-46. <br>
    *   Last updated at: October 24, 2022
    *   @param {object} pet_data is a set of array object of the updated pet information.
    *   @author Renz Lester
    */
    handleOnUpdate = (pet_data) => {
        let pet = [...this.state.data];
        pet.map(pet_item => {
            if (parseInt(pet_item.id) === parseInt(pet_data.id)) {
                pet_item.type = pet_data.type;
                pet_item.description = pet_data.description;
                pet_item.skill_1 = pet_data.skill_1;
                pet_item.skill_2 = pet_data.skill_2;
                pet_item.skill_3 = pet_data.skill_3;
            };

        });
        this.setState({ pet });
    };

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home pet_data={this.state.data} getPetId={this.getPetId} />} />
                    <Route path="/add-pet" element={<AddPet handleOnAdd={this.handleOnAdd} setPetId={this.state.data.length} />} />
                    <Route path="/edit-pet" element={<EditPet active_pet_details={this.state.active_pet_details} handleOnUpdate={this.handleOnUpdate} />} />
                </Routes>
            </Router>
        );
    }
}

export default App;