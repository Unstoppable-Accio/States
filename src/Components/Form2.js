 
import React, {useState} from "react";



const Form2 = () => {
    

    return (
        <div>
             <input type="text" placeholder="Enter your name" 
              
             />
             <button>Submit</button>
             <p></p> 
             {/* This paragraph should display names in capital letter only when button is pressed */}
        </div>
    )

}

export default Form2;