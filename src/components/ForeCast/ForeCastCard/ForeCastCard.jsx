import React from "react";
import Style from  "./Styles"

import Cloudy from "../../../assets/Cloudy";

const ForeCastCard = (props) =>{
    
    return (
        <div style={Style.card}>
            <Cloudy scale={1}></Cloudy>
            <DayIndicator/>
            <TemperatureIndicator/>
        </div>
    )
}

const TemperatureIndicator = (props) =>{
    return (
        <div style={Style.temperatureIndicator}>
            30° / 45°
        </div>
    )
}

const DayIndicator = (props) =>{
    return (
        <div style={Style.dayIndicator}>
           <a>Monday</a>
           <a>clear</a>
        </div>
    )
}


export default ForeCastCard;