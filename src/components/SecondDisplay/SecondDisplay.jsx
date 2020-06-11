import React from "react";
import Style from  "./Styles"

import ImageCard from "./ImageCard/ImageCard";


const SecondDisplay = (props) =>{
    
    
    
    return (
        <div style={Style.grid}>
           <h3> SecondDisplay Component</h3>
           <ImageCard/>
        </div>
    )
}

export default SecondDisplay;