import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const Detail = () => {
  const navigate= useNavigate()
  const {id} = useParams("");
  // console.log(id)

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);


  const fun = async () => {
    const res = await axios.get(`/getUser/${id}`);
    // console.log(res);
    setUser(res.data);
    setLoading(false)
    // console.log(res)
  };

  useEffect(() => {
   
    fun();
  }, []);
  console.log("user :", user);

  // console.log("userData:",userData.data.length)


  const deleteUser = async (id) => {
    const data  = await axios.delete(`/delete/${id}`, {id});
    console.log(data)
    if(data){

      navigate("/")
    }
    
    // if(data){
    //   // navigate("/")
    // }
  }

  return (
    <div className='w-full flex flex-col'>
    <div className='h-[500px] w-[300px] md:w-[800px] rounded-lg bg-[#dcdde1] shadow-lg'>
    <Link to='/'>
    <div className='text-start  p-2'>Home</div>
    </Link>

        <div className='h-[500px] border-t flex flex-col justify-center items-center'>
        <div className=''>{loading? ( <>loading..</>) : <p>Name : {user.name} </p>}</div>
        <div className=''>{loading? ( <>loading..</>) : <p> Email : {user.email} </p> }  </div>
        <div className=''>{loading? ( <>loading..</>) : <p> Bike : {user.bike} </p> }  </div>
        <div>
          <Link to={`/edit/${user._id}`}>
            <button className='bg-black hover:bg-white hover:text-black text-white rounded-lg hover:shadow-lg border p-1 text-[12px] md:text-[15px] md:p-2  m-1 md:m-2'>Edit</button>
          </Link>

            <button onClick={()=>deleteUser(user._id)} className='p-1 text-[12px] md:text-[15px] md:p-2 bg-black hover:bg-white hover:text-black text-white rounded-lg hover:shadow-lg border  m-1 md:m-2'>Delete</button>

        </div>
        </div>
        

    </div>

    </div>
  )
}

export default Detail