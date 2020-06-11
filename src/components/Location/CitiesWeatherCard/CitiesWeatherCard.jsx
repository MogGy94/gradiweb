import React from "react";
import Style from  "./Styles"
import Cloudy from "../../../assets/Cloudy";


const CitiesWeatherCard = (props) =>{
    
    
    
    return (
        <div style={Style.container}>
            <div style={Style.topInfo}>
                <Cloudy color={"#000000"} scale={2}></Cloudy>
                <h1> 29°</h1>
                <div style={Style.countryName}>
                    <a>Paris</a>
                    <a>France</a>
                </div>
            </div>
            <div style={Style.bottomInfo}>
                CitiesWeatherCard Component
            </div>
        </div>
    )
}

export default CitiesWeatherCard ; 