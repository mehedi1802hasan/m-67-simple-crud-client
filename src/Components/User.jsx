import React from 'react';
import { Link, useLoaderData, } from 'react-router-dom';

const User = () => {
    const users=useLoaderData();
    const handleDelete=_id=>{
   console.log(_id)
   fetch(`http://localhost:5000/users/${_id}`,{
    method:"DELETE"
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    if(data.deleteCount>0){
        alert('deleted successfully')
    }
   })
    }
    return (
        <div>
           
            <h3>{users.length}</h3>
            <Link to="/">Home</Link>
            <div >
  {
    users.map(user => <p key={user._id} style={{backgroundColor: "yellow", border: "3px solid black"}}>{user._id}.... {user.name}---{user.email} <button onClick={()=>handleDelete(user._id)}>X</button></p>)
  }
</div>

        </div>
    );
};

export default User;