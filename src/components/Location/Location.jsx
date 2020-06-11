import React from "react";
import Style from  "./Styles"

import CitiesWeatherCard from "./CitiesWeatherCard/CitiesWeatherCard";
import AddLocationCard from "./AddLocationCard/AddLocationCard";

const Location = (props) =>{
    
    
    
    return (

        <div style={Style.grid}>
            Location Component
            <CitiesWeatherCard/>
            <CitiesWeatherCard/>
            <AddLocationCard/>
        </div>
    )
}


export default Location; 