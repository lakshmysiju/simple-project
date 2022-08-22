import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

function SignIn()
{
    const navigate=useNavigate();

    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    let data={email,password};
    
  const handleChange  = (event) =>{
    event.preventDefault();
    fetch("http://localhost:8080/Add",{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(data)
           }).then(res=>res.json())
           .then((result)=>{
             console.log(result)
             localStorage.setItem("UserInfo",JSON.stringify(result))
             navigate("/home")

          //   if(result.access==="admin")
          //   {
          //    console.log("is here");
          //    localStorage.setItem("UserInfo",JSON.stringify(result))

          //     navigate("/")
          //  }
          //    if(result.access==="user"){
          //     console.log("is here");
          //     localStorage.setItem("UserInfo",JSON.stringify(result))

          //     navigate("/user")
          //    }
          if(result===null){alert("mismatch credencials")}
                })

        }
    return(
        <div className="div-container">
            <h1>Login Page</h1>
            <form>
                <label>
                    Email:
                </label><br></br>
                <input type='email' className="email" onChange={(e)=>{setEmail(e.target.value)}}  /><br></br><br></br>
                <label>
                    Password:
                </label><br></br>
                <input type='password' className="psw" onChange={(e)=>{setPassword(e.target.value)}} /><br></br><br></br>
                <input type='submit' className="signupbtn" onClick={handleChange} value='Login' /><br></br>
                <a href="/">Create a new account!</a>
            </form>
        </div>
    )
}
export default SignIn;