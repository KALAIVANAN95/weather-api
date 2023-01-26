import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import Result from './components/Result';

function App() {

  const [input,setInput]=useState("");
  const [desc,setDesc]=useState("");
  const [temp,setTemp]=useState("");
  const [icon,setIcon]=useState("");


  const findWeather = async ()=>{
    const apiKey="998653405411b9b70ba3c68ba75f3b4f";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apiKey+"&units="+unit;
    const response= await axios.get(url);
    console.log(response,"response");
    const temp=await response.data.main.temp;
    const weatherDesc=await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;

    const imageURL="https://openweathermap.org/img/wn/"+icon+"@2x.png"

    setTemp(temp)
    setDesc(weatherDesc)
    setIcon(imageURL)
    setInput("")
  }

  console.log(temp,desc,icon);
  return (
    <div>
      {/* 998653405411b9b70ba3c68ba75f3b4f */}
      {temp === "" ? (<InputArea setInput={setInput} input={input} findWeather={findWeather} />) : (<Result temp={temp} desc={desc} image={icon} setTemp={setTemp}/>)}
     
    </div>
  );
}

export default App;
