import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import './SignUp.css';

function SignUp()
{
const navigate= useNavigate();
  const [uid, setUid]=useState({});
  const [username,setUsername]=useState({});
  const [email,setEmail]=useState({});
  const [dateOfBirth,setDateOfBirth]=useState({});
  const [password,setPassword]=useState({});
  const [password2,setPassword2]=useState({});
  
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
      if(password==password2){

    
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
    else
  alert("Password doesn't match")
  }
  

  
  
  
    // function checkemail(){
    //   fetch(`http://localhost:8080/checkemail/${email}`)
    //   .then(res=>res.text())
    //          .then((result)=>{console.log(result);
    //           if (result===null){validatel()}
    //           if (result==="mail is already used"){setVal(result)}
    //         })}

    // useEffect(() => {
    //       console.log(data);
    //       if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(data);
    //       }
    //     }, [formErrors]);
    //     const validate = (values) => {
    //       const errors = {};
    //       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //       if (!values.username) {
    //         errors.username = "Username is required!";
    //       }
    //       if (!values.email) {
    //         errors.email = "Email is required!";
    //       } else if (!regex.test(values.email)) {
    //         errors.email = "This is not a valid email format!";
    //       }
    //       if (!values.password) {
    //         errors.password = "Password is required";
    //       } else if (values.password.length < 4) {
    //         errors.password = "Password must be more than 4 characters";
    //       } else if (values.password.length > 10) {
    //         errors.password = "Password cannot exceed more than 10 characters";
    //       }
    //       return errors;
    //     };
  return (
    <div className="App">
     <div>
        <h1>User Registration</h1>
        <p>Already have an account?<Link to="/login">Login in</Link></p>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name
                </label><br></br>
                <input type='text'className="username" name="username" onChange={(e)=>{setUsername(e.target.value)}} required /><br></br>
                <label>
                    Email:
                </label><br></br>
                <input className="email" type='email' name="email" onChange={(e)=>{setEmail(e.target.value)}} required/><br></br>
                <label>Date Of Birth:</label><br></br>
                <input type='date'className="date" name="dateOfBirth" onChange={(e)=>{setDateOfBirth(e.target.value)}} required></input><br></br>
                <label>
                  Password:
                </label><br></br>
                <input type='password' className="psw" name="password" onChange={(e)=>{setPassword(e.target.value)}} required/><br></br><br></br>
                <label>
                 Confirm Password:
                </label><br></br>
                <input type='password' className="re-psw" name="password2" onChange={(e)=>{setPassword2(e.target.value)}} required/><br></br><br></br>
                <input type='submit' className="signupbtn" onClick={handleSubmit} />
            </form>
        </div>
</div>
  );
  }
export default SignUp;