import React, { useEffect, useState } from "react";

const ShowPost=()=>{
    const [serverResponse,setserverResponse] = useState(null);

    const fetchAllPosts = async()=>{
        const resp = await fetch('http://localhost:8085/all')
        setserverResponse(await resp.json())
    }

    useEffect(()=>{
        fetchAllPosts()
    },[])

    if(serverResponse == null){
        return <h2>Loading...</h2>
    }

    return(
        <>
            {
                serverResponse?.result?.map?.((post,index)=>{
                    return <img width={100} height={100} style={{border: '2px solid red'}} src={`http://localhost:5000/images/${post.image_file}`} key={index} alt="imgae"/>
                })
            }
        </>
    )
}

export default ShowPost;