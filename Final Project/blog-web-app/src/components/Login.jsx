import React from 'react';
import './login.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



function Login() {

const initialValues={username:"",email:"",dateOfBirth:"",password:"",access:"admin"};
const [formValues, setformValues] = useState(initialValues);
const[formErrors,setFormErrors]=useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange= (e)=>{
    const {name , value} =e.target;
    setformValues({...formValues,[name]:value});
};

const handleSubmit=(e)=>{
e.preventDefault();
// setFormErrors(validate(formValues));
setIsSubmit(true);

fetch("http://localhost:8080/create",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formValues)
  }).then(() => {
    console.log("added")
})

};
const logValues={username:"",password:""};
const [logForm, setlogForm] = useState(logValues);
const [submitLog, setsubmitLog] = useState(false);

const submitChange= (e)=>{
  const {name , value} =e.target;
  setlogForm({...logForm,[name]:value});
};

const logSubmit=(e)=>{
    e.preventDefault();
    setsubmitLog(true);

    fetch("http://localhost:8080/Add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formValues)
      }).then(res=> res.json())
      .then((result)=>
      {console.log(result)
    })
};

// useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };


  return (
    <div className='contain'>
	<div className='main'>  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className='signup'>
				<form onSubmit={handleSubmit}>
                 
					<label for="chk" >Sign up</label>
                    <input type="text" name="username" placeholder="User name"
                    value={formValues.username} onChange={handleChange} />
                    {/* <p>{formErrors.username}</p> */}
					
					<input type="email" name="email" placeholder="Email" 
                    value={formValues.email} onChange={handleChange} />
                    {/* <p>{formErrors.email}</p> */}
                    <input type="date" name="dateOfBirth"required="" value={formValues.dateOfBirth} onChange={handleChange}/>

                    <input type="password" name="password" placeholder="Password" 
                    value={formValues.password} onChange={handleChange} />
                    {/* <p>{formErrors.password}</p> */}

					<button onClick={handleSubmit}>Sign up</button>
				</form>
			</div>

			<div className='login'>
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="username" name="username" placeholder="user name" value={logForm.username} onChange={submitChange} required=""/>
					<input type="password" name="password" placeholder="Password" value={ logForm.password} onChange={submitChange} required=""/>
					<button onClick={logSubmit}>
            <Link to="/profile">
            Login
            </Link></button>
				</form>
			</div>
	</div>
    </div>


  )
}

export default Login;


