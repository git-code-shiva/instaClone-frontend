import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./header/header";
import "./form.css"



const Form=()=>{
    const navigate =useNavigate();

    const [allData,setallData] = useState({
        author:"",location:"", description:""
    })
    const [image,setImage] = useState("");
    const [imageURL,setimageURL] = useState("");


    const loadFile = (event) => {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = () => {
          URL.revokeObjectURL(output.src) // free memory
        }
    }

    const handleValue=(e)=>{
        setallData({...allData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        if(imageURL){
            fetch("https://dark-colt-clothes.cyclic.app/createPost",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:allData.author,
                    location:allData.location,
                    description:allData.description,
                    postImage: imageURL
                })
            })
    .then(res => res.json()).then(data =>{
        if(data.error){}
        else{
          console.log(data)
          navigate('/main_page')
        }} ).catch(err => console.log(err))
    }
}
    ,[imageURL])



    const handlePost=()=>{
    //     const formData = new FormData();

    // formData.append("file",image);
    // formData.append("upload_preset", "instaClone")
    // formData.append("cloud_name", "cloudsundi")

        
    //     fetch("https://api.cloudinary.com/v1_1/cloudsundi/image/upload",{
    //         method:"post",
    //         body:formData
    //     }).then(res=>res.json()).then(setimageURL(formData.url)).catch((err)=>{console.log(err)})

    // }
    

    const data = new FormData();
    data.append("file", image)

    //append from server 
    data.append("upload_preset", "instaClone")
    data.append("cloud_name", "cloudsundi")

    //url for fecting the data from cloudinary server
    fetch("https://api.cloudinary.com/v1_1/cloudsundi/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      //send url to contant
      .then(data => setimageURL(data.url))
      .catch(err => console.log(err))
    }
   
    return(
        <>
        <Header/>
        <div className="root-container">
        <div className="container">
            <section className="first-sec">
            <img id='output' src='https://t4.ftcdn.net/jpg/02/17/88/73/360_F_217887350_mDfLv2ootQNeffWXT57VQr8OX7IvZKvB.jpg' alt='upload img' />
                <input type="file" onChange={(e)=>{loadFile(e); setImage(e.target.files[0])}} accept="image/*"/>
            </section>
            <section className="second-sec">
                <input className="input-tag1" type="text" onChange={handleValue} name="author" placeholder="Author" />
                <input className="input-tag2" type="text" onChange={handleValue} name="location" placeholder="Location"/>
            </section>
            <section className="third-sec">
                <input className="input-tag3" type="text" onChange={handleValue} name="description" placeholder="Description"/>
            </section>
            <section className="btn-sec">
                <button onClick={handlePost}>Post</button>
            </section>
        </div>
        </div>
        </>
    );
}
export default Form;