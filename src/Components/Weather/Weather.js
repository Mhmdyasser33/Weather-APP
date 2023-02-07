import React , {Component} from "react";
import './Weather.css'
const  Weather = (props)=> {
        return (    
            <div className="container">
              {
                props.Temprature && 
                <p className="title"> Temperature :
              <span className="title_value">  {props.Temprature} </span>
                </p>
              }
              {
                   props.City && 
                   <p className="title"> City :
                  <span className="title_value">  {props.City}</span>
                   </p>
                 
              }
              {
                    props.Country  &&
                    <p className="title"> Country :
                   <span className="title_value">  {props.Country} </span>
                    </p>
                    
              }
              {
                    props.Humidity &&
                    <p className="title"> Humidity : 
                      <span className="title_value">   {props.Humidity}</span>
                    </p>
                     
              }
              {
                    props.Description && 
                    <p className="title"> Description :
                 <span className="title_value">  {props.Description}</span> 
                    </p>
                   
              }
              {
                    props.Description &&
                    <p className="title"> TimeZone :
                    <span >  {props.TimeZone}</span>
                    </p>
                     
              }
              {
                    props.Error &&
                    <p className="title"> Error :
                     <span className="title_value">  {props.Error}</span>
                    </p>    
              }
      
         
        
         
        
         
          
            </div>
        )
    }
export default Weather;