
import React, {useState} from "react";



const FormValidation = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPass] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");
    const [user, setUser] = useState({name:"", email:"", password:"", confirmPass:""})

      console.log(user)
      
    //   step 1: my name should be atleast of 2 words 
    //   step 2: my email should be valid
    //   step 3: my password should be atleast 8 characters long
    //   step 4: my confirm password should match with password
    // display the error message if any of the above condition is not met
    // display the success message if all the above condition is met
     const {name, email, password, confirmPass} = user;  // destructuring
    
      function submitForm(e){
          e.preventDefault()

          if(!name || !email || !password || !confirmPass){
                alert("Please fill all the fields")
                return
          }
          if(name.trim().includes(" ")== false){
              alert("Name should be atleast 2 words")
              return
          }
          if(email.includes("@")==false){
              alert("Email should be valid")
              return
          }
            if(password.length < 8){
                alert("Password should be atleast 8 characters long")
                return
            }
            if(password != confirmPass){
                alert("Password and confirm password should match")
                return
            }
            alert("Form submitted successfully")
            

      }









    return(
        <div>
             {/* Hey dear Ai make signup form with name, email, password, confirm password and a submit button please*/}
             <form onSubmit={submitForm}>
                    <input type="text" placeholder="Enter your name" 
                      onChange={e => setUser({...user, name: e.target.value})}
                    />

                    <input type="email" placeholder="Enter your email" 
                      onChange={e => setUser({...user, email: e.target.value})}
                    />
                     
                    {/* <input type="NUmber" placeholder="Enter your age" /> */}

                    <input type="password" placeholder="Enter your password" 
                        onChange={e => setUser({...user, password: e.target.value})}
                    />
                    <input type="password" placeholder="Confirm your password" 
                        onChange={e => setUser({...user, confirmPass: e.target.value})}
                    />

                    <button type="submit">Submit</button>
             </form>



        </div>
    )
}

export default FormValidation;