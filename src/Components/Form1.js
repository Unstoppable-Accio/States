import React, {useState} from "react";



const Form1 = () => {
    const [name, setName] = useState("")

    console.log("Name is =",name)

        function updateName(event){
            //  console.log(event.target.value)
             setName(event.target.value)
        }

    return (
        <div>
             <input type="text" placeholder="Enter your name" 
               onChange = {updateName}
             />
             <p>{name}</p>
        </div>
    )

}

export default Form1;