import React, { useState } from "react";
import axios from "axios";
import {useNavigate,Link} from 'react-router-dom'
import { toast } from "react-hot-toast";


const Register = () => {
    const navigate = useNavigate();
  const [obj, setObj] = useState({
    name: "",
    email: "",
    bike: "",
  });

  const allObj = (e) => {
    const { name, value } = e.target;
    // setObj({name : value})
    // console.log(obj)

    setObj((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // console.log(e.target.name)
  };
//   console.log(obj);

  const addUser =  async (e) => {
    e.preventDefault()
    const { name, email, bike } = obj;
    try {
      const data  = await axios.post("/register", {name,email, bike});

        // console.log("data:",data)
        // if(data.error){
        //     // console.log(error)
        // }
        if(data){
            alert("data added")
            navigate("/");
        }
    }
    
    catch (error) {
      console.log(error.response.data );
        toast(error.response.data )
    }

  };

  return (
    <div className="m-[50px]  bg-[#dcdde1] p-2 rounded-lg">
       <div className='flex justify-between m-3'>
        <Link to='/'> 
         <h1 className='bg-black hover:bg-white hover:text-black text-white rounded-lg hover:shadow-lg border p-2'>Home</h1>
         </Link>
        <h1 className="p-2">Register your profile</h1>
        </div>
     
      <div>
        <form className="flex flex-col " onSubmit={addUser}>
          <input
            type="text"
            name="name"
            value={obj.name}
            onChange={allObj}
            className="m-2  p-2 rounded"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={obj.email}
            onChange={allObj}
            className="m-2  p-2 rounded"
            placeholder="Email"
          />
          <input
            type="text"
            name="bike"
            value={obj.bike}
            onChange={allObj}
            className="m-2 p-2 rounded"
            placeholder="Bike"
          />
          <button className="m-2 bg-black hover:bg-white hover:text-black text-white rounded-lg hover:shadow-lg hover:border border-black p-2" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
