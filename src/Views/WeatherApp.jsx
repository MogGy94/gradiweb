import React,{useEffect} from 'react';
import Styles from "./Styles"
import test from "./teststylesgrid";
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
        <section  style={Styles.mainDisplay} className="mainDisplay">mainDisplay</section>
        <section  style={Styles.seconDisplay} className="seconDisplay">seconDisplay</section>
        <section  style={Styles.forecast} className="forecast">forecast</section>
        <section  style={Styles.placeToVicit} className="placeToVicit">placeToVicit</section>
        <section  style={Styles.location} className="location">location</section>  
      </div>
    </div>
    
  );
}


const Items = () =>{
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
