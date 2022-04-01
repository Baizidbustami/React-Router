import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, username}=props.user

    const navigate = useNavigate(); 
    const showFriendDetail = ()=>{
        const path =`/friend/${id}`
        navigate(path) 
    }
    return (
        <div>
            <h2>{name}</h2>
            
            {/* আমরা চাইলে Link দিয়েও ব্যবহার করতে পারি */}
            {/* <Link to ={'/friend/' + id}>Show Detail</Link> */}



             {/* আমরা চাইলে button দিয়েও ব্যবহার করতে পারি */}
            <button onClick={showFriendDetail}>
                {username}id:{id}</button>
        </div>
    );
};

export default Friend;