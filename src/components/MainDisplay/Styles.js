//Main Display Styles
const Styles = {
    grid:{
        display: "grid",
        gridTemplateColumns: "repeat(13, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        alingItems: "strech"
    },
    weatherIcon:{
        gridArea: "3 / 1 / span 3 / span 1",
        background: "#65406299",
    },
    mapIcon:{
        marginLeft: "30px",
        gridArea: "4 / 2/ span 2 / span 2",
        background: "#35406299",
    },
    temperature:{
        gridArea: "5 / 1 / span 3 / span 1",
        background: "#35406299",
    },
    image:{
        margin: "30px",
        borderRadius: "25px",

        gridArea: "1 / 1 / span 8 / span 13",
        background: "#35406299",
    },
    name:{
        marginLeft: "30px",
        gridArea: "3 / 2 / span 1 / span 2",
        background: "#35406299",
    }
}

export default Styles; 