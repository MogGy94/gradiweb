import React,{useEffect} from 'react';
import Styles from "./Styles"
import test from "./teststylesgrid";

import ForeCast from "../components/ForeCast/ForeCast";
import Location from "../components/Location/Location";
import MainDisplay from "../components/MainDisplay/MainDisplay";
import SeconDisplay from "../components/SecondDisplay/SecondDisplay";
import PlaceToVicit from "../components/PlaceToVicit/PlaceToVicit";


import Cloudy from '../assets/Cloudy';

import whather from "../services/requesWeatherService";

function WeatherApp() {

  
  useEffect(()=>{
    //whather("Paris")
  },[])

  return (
    <div  style={test.grid}>
        <div style={Styles.grid} className="appContainer">
          {Items()}
        </div>
      <div style={Styles.grid} className="appContainer">
        <section  style={Styles.mainDisplay} className="mainDisplay">
          <MainDisplay/>          
        </section>
        <section  style={Styles.seconDisplay} className="seconDisplay">
          <SeconDisplay/>
        </section>
        <section  style={Styles.forecast} className="forecast">
          <ForeCast/>
        </section>
        <section  style={Styles.placeToVicit} className="placeToVicit">
          <PlaceToVicit/>
        </section>
        <section  style={Styles.location} className="location">
          <Location/>
        </section>  
      </div>
    </div>
    
  );
}


const Items = () =>{
  //this shows the grid that is been used im the aplication 
 const Item  = props => <div style={props.name%2==0 ? Styles.item0:Styles.item1 }> {props.name} </div>
 let List = []; 
 for (var i = 0 ; i <  104;i++){
  //console.log(i);
  List = [...List,<Item key={`key-${i}`} name ={i+1} />]
  }
  console.log(List);
 return List;
}

export default WeatherApp;
