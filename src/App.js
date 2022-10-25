import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages and Json file. */
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

    /** 
    *   DOCU: This method adds new sets of array object in the state data. <br>
    *   Triggered in the form component by a onSubmit and triggered the function handleOnSubmit from line 23-34 <br>
    *   Last updated at: October 23, 2022
    *   @param {object} new_data passes a set of array object of an new pet to add in the state data.
    *   @author Renz Lester
    */
    onAdd = async (new_data) => {
        await this.setState(prevState => ({
            data: [...prevState.data, new_data]
        }))
    }

    /** 
    *   DOCU: This method returns an id of an pet, get it's index and use the index to set the state pet_id. <br>
    *   This is triggered in the pet_details component by a onClick from line 54 <br>
    *   Last updated at: October 24, 2022
    *   @param {number} id has the id of the pet and it is use to find the index of this pet id.
    *   @author Renz Lester
    */
    getId = (id) => {
        const index = this.state.data
            .map((object) => object.id)
            .indexOf(id);
        this.setState({ pet_id: index });
    }

    /** 
    *   DOCU: This method updates the specific pet by its id in the state data. <br>
    *   This is triggered in the edit_form component by a onSubmit from line 32 and trigger the function handleOnSubmit from line 26<br>
    *   Last updated at: October 24, 2022
    *   @param {object} id has the id of the pet and it is use to find the index of this pet id.
    *   @author Renz Lester
    */
    onUpdate = (pet_data) => {
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
                    <Route path="/" element={<Home data={this.state.data} getId={this.getId} />} />
                    <Route path="/add-pet" element={<Add_pet handleOnClick={this.onAdd} setId={this.state.data.length} />} />
                    <Route path="/edit-pet" element={<Edit_pet pet_details={this.state.data}
                        pet_id={this.state.pet_id}
                        onUpdate={this.onUpdate} />}
                    />
                </Routes>
            </Router>
        );
    }
}

export default App;