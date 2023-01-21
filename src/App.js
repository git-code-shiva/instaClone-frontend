// import logo from './logo.svg';
import React from "react";
import Landing_page from "./components/LandingPage/landing_page";
import Main_page from './components/main_page/main_page'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from "./components/form";
import ShowPost from "./components/showPost";
// import './App.css';
function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Landing_page/>}/>
     <Route path='/main_page' element={<Main_page/>}/>
     <Route path = '/form' element={<Form/>}/>
     <Route path="/view" element={<ShowPost/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
