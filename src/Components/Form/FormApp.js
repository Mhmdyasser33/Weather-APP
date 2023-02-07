import React from "react";
import './Form.css'
const Form = (props)=> {
        return (    
            <div>
               <form action="" onSubmit={props.GetWeather}>
                <input type="text"className="city" name="city" placeholder="Enter City ...."/>
               <br></br>
               <input type="text" className="country" name="country" placeholder="Enter Country ...."/>
               <br></br>
               <input type="submit" className="submit" />
               </form>
            </div>
        )
    
}
export default Form;