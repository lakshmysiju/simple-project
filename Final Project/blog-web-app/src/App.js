import {Route,BrowserRouter,Routes} from "react-router-dom"
import ProfilePage from "./components/ProfilePage";
import FormWrite from "./components/FormWrite";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Update from "./components/Update";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import BlogFeed from "./components/BlogFeed";
import UserProfilePage from "./components/UserProfilePage";
import Home from "./components/Home";
import AdminView from "./components/AdminView";

function App() {
  return (
    <div>

      
    <BrowserRouter>
<Routes>



  {/* <Route exact path="/" element={<Login/>}/> */}
  <Route exact path="/" element={<SignUp/>}/>
  <Route exact path="/login" element={<SignIn/>}/>
  <Route exact path="/admin" element={<ProfilePage/>}/>
  <Route exact path="/useredit" element={<FormWrite/>}/>
  <Route exact path="/navbar" element={<NavBar/>}/> 
  <Route path="/update" element={<Update/>} />   
  <Route exact path="/blogfeed" element={<BlogFeed/>}/>
  <Route exact path="/home" element={<Home/>}/>
  <Route exact path="/user" element={<UserProfilePage/>}/>
  <Route exact path="/adminblog" element={<AdminView/>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
