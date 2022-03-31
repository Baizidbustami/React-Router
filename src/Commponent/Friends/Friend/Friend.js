import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, username}=props.user

    const navigate =useNavigate(); 
    const showFriendDetail = ()=>{
        const path =`/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={showFriendDetail}>{username}id:{id}</button>
        </div>
    );
};

export default Friend;