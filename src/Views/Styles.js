const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const Styles = {
    grid:{
        gridArea: "1 / 1 / 2 / 2",
        margin: "1vh",
        background: "#fabf0e9",
        display: "grid",
        //gridTemplateColumns: "repeat(8,minmax(1em,1fr))",
        gridTemplateColumns: "repeat(13,1fr)",
        gridTemplateRows: "repeat(8,1fr)",
        //gridTemplateRows: "repeat(4,1fr)",
       
       /*  gridGap: "10px", */
       // gridAutoFlow: "dense",
       
        width: "99vw",
        height: "97vh"
    },
    
    mainDisplay:{
        gridArea: "1 / 1 / 5 / 14",
        background: "#b6eb7a99",
        ...center
    },
    seconDisplay:{
        gridArea: "5 / 1 / 9 / 4",
        background: "#65406299",
        ...center
    },
    forecast:{
        gridArea: "5 / 4 / 9 / 7",
        background: "#fb781399",
        ...center
    },
    placeToVicit:{
        gridArea: "5 / 7 / 9 / 10",
        background: "#ffcac299",
        ...center
    },
    location:{
        gridArea: "5 / 10 / 9 / 14",
        background: "#17706e99",
        ...center
    },


    item0:{
        background: "#aaaaaa",
        ...center
    },
    item1:{
        background: "#777777",
        ...center
    },

}


export default Styles;