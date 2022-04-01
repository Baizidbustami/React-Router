import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams(); 
    const [friend, setFriend] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/9')
        .then(res =>res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1 style={{color:'fuchsia'}}>This is Datail of a Bondhu: {params.friendId}</h1>
             
             <h3>Name: {friend.name}</h3>
             <h4>Email: {friend.email}</h4>
             <h6>Website: {friend.website}</h6>
             <p><small>city: {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetail;