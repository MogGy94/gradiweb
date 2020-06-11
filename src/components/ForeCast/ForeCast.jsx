import React from "react";
import Style from  "./Styles"

import ForeCastCard from "./ForeCastCard/ForeCastCard";

const ForeCast = (props) =>{
    
    
    
    return (
        <div style={Style.column}>
             <h3>3 Days Forecast</h3>
             <ForeCastCard/>
             <ForeCastCard/>
             <ForeCastCard/>
        </div>
    )
}

export default ForeCast;