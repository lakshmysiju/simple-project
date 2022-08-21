import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function SignUp()
{
const navigate= useNavigate();
  const [uid, setUid]=useState({});
  const [username,setUsername]=useState({});
  const [email,setEmail]=useState({});
  const [dateOfBirth,setDateOfBirth]=useState({});
  const [password,setPassword]=useState({});
  
   const [number,setNumber]=React.useState()
   useEffect(()=> {
    fetch("http://localhost:8080/userList")
    .then(res=>res.json())
    .then((result)=>{
      setNumber(result)
      setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
      console.log(number)
    })
  },[number])
    const handleSubmit = (event) => {
      console.log(uid)
      let data={uid,username,email,dateOfBirth,password,access:"user"};
        event.preventDefault();
         alert ('your registration have been successful')
        fetch("http://localhost:8080/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      }).then(() => {
        setNumber(number+1)
       setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
       console.log(number)
        console.log("added")
       navigate("/login")
      })
    }
    // function checkemail(){
    //   fetch(`http://localhost:8080/checkemail/${email}`)
    //   .then(res=>res.text())
    //          .then((result)=>{console.log(result);
    //           if (result===null){ValidateEmail()}
    //           if (result==="mail is already used"){setVal(result)}
    //         })}
  return (
    <div className="App">
     <div>
        <h1>User Registration</h1>
        <p>Already have an account?<Link to="/login">Login in</Link></p>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name
                </label><br></br>
                <input type='text' name="username" onChange={(e)=>{setUsername(e.target.value)}} required /><br></br>
                <label>
                    Email:
                </label><br></br>
                <input type='email' name="email" onChange={(e)=>{setEmail(e.target.value)}} required/><br></br>
                <label>Date Of Birth:</label><br></br>
                <input type='date' name="dateOfBirth" onChange={(e)=>{setDateOfBirth(e.target.value)}} required></input><br></br>
                <label>
                  Password:
                </label><br></br>
                <input type='password' name="password" onChange={(e)=>{setPassword(e.target.value)}} required/><br></br><br></br>
                <input type='submit' onClick={handleSubmit} />
            </form>
        </div>
</div>
  );
  }
export default SignUp;