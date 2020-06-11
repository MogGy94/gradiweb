//ForeCastCard components Styles
const centerItems= {
    alignItems: "center",
    justifyContent: "center",
}

const Styles = {
   card: {
        top:"10px", 
        display:"flex",
        alignItems: "center",
        justifyContent: "space-between",
        //background: "#faa81399",
        width: "100%" ,
   },
   dayIndicator:{
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#faa81399",
        width: "100%" ,
   },
   temperatureIndicator:{
        display: "flex",
        borderRadius: "25px",
        ...centerItems,
        padding: "20px",
        
        width: "100%",
        background: "#00000099",
   }
}

export default Styles; 