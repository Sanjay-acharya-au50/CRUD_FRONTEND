import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {AiFillEdit, AiFillDelete, AiOutlineFolderView} from 'react-icons/ai'


const Home = () => {


  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);


  const fun = async () => {
    const res = await axios.get("/getUser");
    // console.log(res);
    setUser(res.data);
    setLoading(false);

    // console.log(res)
  };

  useEffect(() => {
    fun();
  }, []);

  console.log("user :", user);

  // console.log("userData:",userData.data.length)

  const deleteUser = async (id) => {
    const data  = await axios.delete(`/delete/${id}`, {id});
    // console.log(data)
    if(data){
      fun();
    }
  }


    {/* ----------------------------------- */}

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[360px] md:w-full  flex justify-center items-end flex-col p-1 md:p-2 shadow-xl rounded-lg">

      <Link to="/register">
        <button className=" w-[100px] bg-[black] text-white p-2 ">add</button>
      </Link>
      <table className="border mt-2 w-[300px]s">
        <thead className="bg-black text-white w-[300px]">
          
        <tr className=" w-[300px] border border-black">
        <th className="p-1 md:p-4"></th>
        <td className="p-1 md:p-4">name</td>
        <td className="p-1 md:p-4">email</td>
        <td className="p-1 md:p-4">bike</td>
        <td className="p-1 md:p-4">
        
        </td>
      </tr>

        </thead>
        <tbody>

              {/*  ? important */}
{/*  user?.map((e, i) => { */}


{ loading ? ( <div className="text-center">Loading...</div> ) : user && user.map((e, i) => {
  return (

      <tr className="w-[300px]" key={i}>
        <th className="p-1 md:p-4 border">{i+1}</th>
        <td className="p-1 md:p-4 border">{e.name}</td>
        <td className="p-1 md:p-4 border">{e.email}</td>
        <td className="p-1 md:p-4 border">{e.bike}</td>
        {/* <td className="p-4">{e._id}</td> */}
        <td className="p-1 md:p-4 md:flex border">
    <Link to={`/view/${e._id}`}>
          <button className="px-4 py-2 bg-[green] text-white m-1 md:mr-2  ">

            <AiOutlineFolderView/>
          </button>
    </Link>
    <Link to={`/edit/${e._id}`}>
    <button className="px-4 py-2 bg-[blue] text-white m-1 md:mr-2  ">
            <AiFillEdit/>
          </button>
    </Link>
        
          <button onClick={()=>deleteUser(e._id)} className=" px-4 py-2 bg-[red] text-white m-1 md:mr-2 ">
            <AiFillDelete/>
          </button>
        </td>
      </tr>

  );
})}

        </tbody>
      </table>

        {/* --------------------------      ---------------------------- */}


        {/* <div>

          <div></div>

        </div> */}

    </div>
    </div>

  );
};

export default Home;
