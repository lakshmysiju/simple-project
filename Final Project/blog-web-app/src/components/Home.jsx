import React from 'react'
import {Route,Routes} from "react-router-dom"
import BlogFeed from './BlogFeed';
import AdminView from './AdminView';

function Home() {
  var UserInfo=localStorage.getItem("UserInfo");
  UserInfo=JSON.parse(UserInfo)
  return (
    <Routes>
      <Route path='*' element={UserInfo.access==="admin"?<AdminView/>:<BlogFeed/>}></Route>
    </Routes>
  )
}

export default Home