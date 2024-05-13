import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'
import UseCurrency from './components/UseCurrency'
import InputBox from './components/InputBox';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/useContext';
import Childs from './components/Childs';
import List from './components/List'
function App() {

 const handleClickfromChild = () => {
  console.log("clicked")
 }
 const handleParams = (params) => {
    console.log(params)
 }
 const arr = [{
  img : "https://res.cloudinary.com/vantagecircle/image/upload/h_41,w_41/r_max/v1594986597/prod/profile-pic/userpic1308136.jpg",
  name: "gh",
  place: "ghy"
 },
 {
  img : "https://res.cloudinary.com/vantagecircle/image/upload/h_41,w_41/r_max/v1594986597/prod/profile-pic/userpic1308136.jpg",
  name: "ghr",
  place: "ghyr"
 }]
 
  return(<>
  <UserContextProvider>
  <Login>children</Login>
  {arr.map((item) => (
  <List key = {item.name} {...item}
  ></List>
  ))}
 

 
  <Profile ></Profile>

  <Childs 
  onSelected = {true}
  onSelect = {handleClickfromChild}
  buttonPass = {() => handleParams("button")}
  id = "idPass"
  className="class"
  ButtonName="button"
  >children val</Childs>
  </UserContextProvider>
 
  </>)
   
  
}

export default App
