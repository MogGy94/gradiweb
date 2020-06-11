import React from "react";
import Style from  "./Styles"
import Cloudy from "../../assets/Cloudy"


const MainDisplay = (props) =>{
    
    
    
    return (
        <div style={Style.grid}>



            <div style={Style.image}>
                MainDisplay Component
            </div>
            <h2 style={Style.name}>
                BOGOTA
            </h2 >
            <div style={Style.mapIcon}>
                <Cloudy scale={2}></Cloudy>
            </div>
            <div style={Style.weatherIcon}>
                <Cloudy scale={4}></Cloudy>
            </div>
            <div style={Style.temperature}>
                38°
            </div>
            
        </div>
    )
}

export default MainDisplay ; 