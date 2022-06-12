import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = (props) =>  {

  return (
   
   
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path='/profile' element={<Profile 
          store = {props.store}
          />}/>
          <Route path='/dialogs/*' element={<DialogsContainer store = {props.store} />}/>
        </Routes>
      </div>
    </div>
  

);
}







export default App;
