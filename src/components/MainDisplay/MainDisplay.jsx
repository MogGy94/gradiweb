import React from "react";
import Style from  "./Styles"
import Cloudy from "../../assets/Cloudy"


const MainDisplay = (props) =>{
    
    
    
    return (
        <div style={Style.grid}>
            {/* <div style={Style.image}>
               <img src="https://www.ucatolica.edu.co/portal/wp-content/uploads/2018/10/bogota-distrito-capital.jpg" alt="Bogota"/>
            </div> */}
             <div style={Style.weatherIcon}>
                <Cloudy scale={4}></Cloudy>
            </div>
            <div style={Style.temperature}>
               <h1>38°</h1> 
            </div>    

            <h2 style={Style.name}>
                BOGOTA
            </h2 >
            <div style={Style.mapIcon}>
                <Cloudy scale={5}></Cloudy>
            </div>
           
            
        </div>
    )
}

export default MainDisplay ; 