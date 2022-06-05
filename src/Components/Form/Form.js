import React, { useState } from "react";
import { cityContext, handleChoiceContext } from '../../App'
import "./Form.css"
const Form = (props) => {
    // console.log(cityContext)
    let cities;
    const [stateChoice, setStateChoice] = useState('')
    const [cityChoice, setCityChoice] = useState('')
    console.log(stateChoice, cityChoice)

    const dropDowns = (value) => {
        let states = value.map(obj => {
            return (
                <option  value={obj.state} name={obj.state} key={obj.state}>{obj.state}</option>
            )
        })
        
        let selectedState = value.find(element => element.state === stateChoice)
            if (selectedState) {
                cities = selectedState.cities.map(city => {
                    return (
                        <option value={city.city} name={city.city} key={city.city}>{city.city}</option>
                    )
                })
            }

        
        
    
    // const selectState = (event) => {
    //     console.log(event.target.value);
    //     setStateChoice(event.target.value)
    //     console.log(stateChoice)
    // }
        return (
            <form>
                <select onChange={(event) => setStateChoice(event.target.value)}>
                    <option value='none'>Please select a state:</option>
                    {states}
                </select>
                <select onChange={(event) => setCityChoice(event.target.value)}>
                    <option value='none'>Please select a city:</option>
                    {cities}
                </select>
                <button onClick={(event) => props.handleUserChoice(event, stateChoice, cityChoice)}>Select!</button>
            </form>
        )
    }
    

    return (
        <cityContext.Consumer>
            {value => dropDowns(value)}
        </cityContext.Consumer>
    )
}


export default Form