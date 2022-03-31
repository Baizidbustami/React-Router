
import React, { useEffect, useState } from 'react';
import Friend from './Friend/Friend';

const Friends = () => {
const [users, setUsers]=useState([]);console.log(users)
useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data))
},[]);
 
    return (
        <div>
            
            <h1 style={{color:'blue'}}>Hello!! <br /> How are youe friends</h1>
            {
                users.map(user=><Friend key={user.id} user={user}></Friend>)
            }

        </div>
    );
};

export default Friends;