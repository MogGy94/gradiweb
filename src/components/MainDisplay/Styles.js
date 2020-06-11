//Main Display Styles
const alpha = "bb";
const Styles = {
    grid:{
        display: "grid",
        gridTemplateColumns: "repeat(13, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        maxHeight: "50vh",
        width: "100vw"
    },
    weatherIcon:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gridArea: "3 / 1 / span 3 / span 1",
        background: `#654062${alpha}`,
        borderRadius: "25px"

    },
    temperature:{
        gridArea: "5 / 1 / span 3 / span 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        background: `#354062${alpha}`,
        borderRadius: "25px",
        fontSize: "2em"

    },
    mapIcon:{
        
        marginLeft: "30px",
        gridArea: "4 / 2/ span 2 / span 2",
        background: `#354062${alpha}`,
    },
    
    imageContainer:{
        margin: "30px",
        borderRadius: "25px",

        gridArea: "1 / 1 / span 8 / span 13",
        background: `#354062${alpha}`,
    },
    image: {
        width: "100%"
    },
    name:{
        margin: "0px",
        marginLeft: "30px",

        gridArea: "3 / 2 / span 1 / span 2",
        background: `#354062${alpha}`,
    }
}

export default Styles; 