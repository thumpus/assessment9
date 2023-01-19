import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import slugify from 'react-slugify';

function NewItemForm(){
    const [inputs, setInputs] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        let itemToAdd = {
            "id": slugify(inputs.name),
            "name": inputs.name,
            "description": inputs.description,
            "recipe": inputs.recipe,
            "serve": inputs.serve
        }

        event.preventDefault();
        if (inputs.type === "snack"){
            const result = await SnackOrBoozeApi.addSnack(itemToAdd);
            history.push(`/`)
        } else if (inputs.type ==="drink"){
            const result = await SnackOrBoozeApi.addDrink(itemToAdd);
            history.push(`/`)
        }
         
    }

    return (
        <section>
            <Card>
                <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    New Item Form
                </CardTitle>
                    <form onSubmit={handleSubmit}>
                        <label>Type:<br />
                            <label>Snack </label>
                            <input
                                type="radio"
                                name="type"
                                value="snack"
                                onChange={handleChange}
                                required
                            /><br />
                            <label>Drink </label>
                            <input
                                type="radio"
                                name="type"
                                value="drink"
                                onChange={handleChange}
                                required
                            />
                        </label><br />
                        <label>Name: 
                            <input
                                type="text"
                                name="name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                                required
                            />
                        </label><br />
                        <label>Description: 
                            <input
                                type="text"
                                name="description"
                                value={inputs.description || ""}
                                onChange={handleChange}
                                required
                            />
                        </label><br />
                        <label>Recipe: 
                            <input
                                type="text"
                                name="recipe"
                                value={inputs.recipe || ""}
                                onChange={handleChange}
                                required
                            />
                        </label><br />
                        <label>Serving Instructions: 
                            <input
                                type="text"
                                name="serve"
                                value={inputs.serve || ""}
                                onChange={handleChange}
                                required
                            />
                        </label><br />
                        <input type="submit"/>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}

export default NewItemForm;