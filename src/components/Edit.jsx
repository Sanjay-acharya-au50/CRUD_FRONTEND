import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const navigate = useNavigate()

    const {id} = useParams("")
    console.log("edit:",id)

    const [obj, setObj] = useState({
        name : "",
        email : "",
        bike : "",
    })


    const allObj = (e) => {

        const  {name, value } = e.target;
        // setObj({name : value})
        // console.log(obj)

        setObj((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
        }

  const addUser =  async (e) => {
    e.preventDefault()
    const { name, email, bike } = obj;
    try {
      const data  = await axios.put(`/update/${id}`, {name,email, bike});
        if(data.status === 200){
            alert("data edited")
            navigate("/");
        }
        // console.log(data)
    }
    
    catch (error) {
    //  console.log(error)
      console.log(error.response.data);

        toast(error.response.data )
    }

  };


  return (
    <div className='m-[50px]'>
        <div className='flex justify-between m-3'>
        <Link to='/'> 
         <h1 className='bg-black hover:bg-white hover:text-black text-white rounded-lg hover:shadow-lg border p-2'>home</h1>
         </Link>
        <h1 className='p-2'>Edit your profile</h1>
        </div>
     

        <div >
            <form className='flex flex-col ' onSubmit={addUser}>
                <input type="text" name="name" value={obj.name} onChange={allObj} className='m-2 border border-black p-2 rounded' placeholder='name'/>
                <input type="text" name="email" value={obj.email} onChange={allObj} className='m-2 border border-black p-2 rounded' placeholder='email'/>
                <input type="text" name="bike" value={obj.bike} onChange={allObj} className='m-2 border border-black p-2 rounded' placeholder='bike'/>
                <button className='m-2 bg-black hover:bg-white hover:text-black text-white rounded-lg hover:shadow-lg border  p-2'>EDIT</button>
            </form>
        </div>


    </div>
  )
}

export default Edit