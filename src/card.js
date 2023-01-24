import { useState } from 'react';
import './card.css'
const Card=({post})=>{
    // const fullDate = new Date();
    // const d = fullDate.getDate();
    // const m = fullDate.getMonth();
    // const y = fullDate.getFullYear();
    // const date = `${d}-${m+1}-${y}`;

    const db_date = (post.createdAt).split("-");
    const day = db_date[2];
    const date = `${day[0]}${day[1]}-${db_date[1]}-${db_date[0]}`
    
    const [like,setLike] = useState(25);
    const likebtn=()=>{
        setLike(like+1);
    }
    return(
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header__name">{post.name}</div>
                        <div className="card-header__place">{post.location}</div>
                    </div>
                    <span>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={post.postImage} alt="place"/>
                </section>
                <section className="card-actions">
                    <span onClick={likebtn}><i className="fa fa-heart" aria-hidden="true"></i></span>
                    <span><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                    {/* <span>{post.date}</span> */}
                    <span>{date}</span>
                </section>
                <section className="likes">
                    {/* {post.likes} Likes */}
                    likes {like}
                </section>
                <section className="description">
                    {post.description} 
                </section>
            </section>
        </>
    )
}
export default Card;