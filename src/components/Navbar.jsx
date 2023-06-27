import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link className='m-4' to='/'>Home</Link>
        <Link className='m-4' to='/register'>Register</Link>
        <Link className='m-4' to='/edit/1'>Edit</Link>
    </>
  )
}

export default Navbar