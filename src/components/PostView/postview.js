import React, { useEffect, useState } from 'react';
import Card from '../../card';
import Loader from '../loader/loader';
const Postview=()=> {
  const [post, setPost] = useState([]);
  const [loading,SetLoading] = useState(true);
  useEffect(()=>{
    fetch("https://dark-colt-clothes.cyclic.app/all").then((res)=> res.json()).then((data)=>{
    setPost(data);
    SetLoading(false);
    }).catch((err)=>{
      if(err){
        console.log(err);
      }
      SetLoading(false);
    })
  },[])
  return (
    <>
      {loading ? <Loader/>:
      <div className='post-container'>
        {post.map((post,i)=>{
          return(
            <Card post={post} key={i}/>
          )
        })}
      </div>
        }
    </>
  );
}
export default Postview;
