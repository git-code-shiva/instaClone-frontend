import './landing_page.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
const Landing_page=()=>{
    const navigate = useNavigate();

    const navigateToContent =()=>{
        navigate('/main_page')
    }
    return(
        <>
            <div className="landing_page">
                <img src={require("../../images/landing_page.png")} alt="landing_page" className='landing_img'/>
                <h2 className="landing_text">10X Team 04</h2>
                <button className="landing_btn" onClick={navigateToContent}>Enter</button>
            </div>
        </>
    )
}
export default Landing_page;