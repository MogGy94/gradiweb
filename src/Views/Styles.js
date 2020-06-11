//WheatherApp Styles

const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:"30px"
}

const Styles = {
    grid:{
        gridArea: "1 / 1 / 2 / 2",
        margin: "1vh 1vw 2vh 0vw",
        background: "#fabf0e9",
        display: "grid",
        //gridTemplateColumns: "repeat(8,minmax(1em,1fr))",
        gridTemplateColumns: "repeat(13,1fr)",
        gridTemplateRows: "repeat(8,1fr)",
        //gridTemplateRows: "repeat(4,1fr)",
       
        gridGap: "10px",
       // gridAutoFlow: "dense",
       
        width: "99vw",
        height: "97vh"
    },
    
    mainDisplay:{
        gridArea: "1 / 1 / 5 / 14",
        background: "#b6eb7a99",
        ...center
    },
    forecast:{
        margin: "0px 0px 0px 10px",
        gridArea: "5 / 1 / 9 / 4",
        background: "#fb781399",
        ...center
    },
    seconDisplay:{
        gridArea: "5 / 4 / 9 / 7",
        background: "#65406299",
        ...center
    },
    
    placeToVicit:{
        gridArea: "5 / 7 / 9 / 10",
        background: "#ffcac299",
        ...center
    },
    location:{
        margin: "20px 40px 0px 0px",
        gridArea: "3 / 10 / 9 / 14",
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