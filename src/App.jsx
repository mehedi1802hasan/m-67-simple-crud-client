

import './App.css'

function App() {

 const handleAdd=(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const user={name,email};
  console.log(user)
  fetch('http://localhost:5000/users',{
   method:"POST",
   headers:{
    'content-type':"application/json"
   },
   body:JSON.stringify(user)


  })
  .then(res=>res.json())
  //.then(data=>console.log(data));
  
  .then(data => {
    if(data.insertedId){
      alert('User added successfully')
      console.log(data)
      form.reset()
    }
  })
 }
  return (
    <>
      
      <h1>Crud simple</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name='name' /> <br />
        <input type="text" name="email" id="" /><br />
        <input type="submit" value="Add Value" id="" />
      </form>
    </>
  )
}

export default App
