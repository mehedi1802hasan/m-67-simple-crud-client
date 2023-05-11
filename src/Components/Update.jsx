import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser=useLoaderData();
  const handleUpdate=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
   // console.log(name,email)
    const updatedUser={name,email};
    console.log(updatedUser)
    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
      method:"PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        alert('great!!! updated successfully done')
      }
 
    })
  }
    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate} >
                <input type="text" name="name" id="" />
                <input type="text" name="email" id="" />
                <input type="submit" value="update" id="" />
            </form>
        </div>
    );
};

export default Update;