import logo from './logo.svg';
import React , {Component} from 'react';
import Form from './Components/Form/FormApp';
import Weather from './Components/Weather/Weather';
import './App.css';
const Api_key = "b467ded6c82c4390dbda3aa3e56e847c" ; 
class App extends Component {
  state = {
    Temprature : '' , 
    City : '' , 
    Country : '' , 
    Humidity : '' , 
    Descriptio : '' , 
    TimeZone : '' , 
    Error : '' 

  }
  GetWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value ; 
    const country = e.target.elements.country.value ;
    const Api =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${Api_key}`) ;
    // to absreact data directly from API . 
    const ApiDate = await Api.json() ; 
    console.log(ApiDate) ;
    ( city && country) ? (
      this.setState({
        Temprature :  ApiDate.main.temp , 
        City     :    ApiDate.name , 
        Country  :    ApiDate.sys.country , 
        Humidity :    ApiDate.main.humidity ,  
        Description : ApiDate.weather[0].description  , 
        TimeZone :    ApiDate.timezone , 
         
      })
      
    ) : (
      this.setState({
        Temprature :  '' , 
        City     :    '' , 
        Country  :    '' , 
        Humidity :    '' ,  
        Description : ''  , 
        TimeZone :    '' , 
        Error : 'Inputs is Empty Please Full it . '   
      })
    )
  }
 
  render(){
    return (
      
      <div className="App">
         <h1 className='head'>Weather App </h1>
       <Form  GetWeather={this.GetWeather}/>
       <Weather
       Temprature =   {this.state.Temprature  } 
       City       =   {this.state.City}
       Country    =   {this.state.Country}
       Humidity   =   {this.state.Humidity}
       Description =  {this.state.Description}
       TimeZone  =    {this.state.TimeZone}
       Error = {this.state.Error}
        />
      </div>
    );
  }

}

export default App;
