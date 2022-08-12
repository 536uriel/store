import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  function logout(){
    fetch('http://localhost:1000/logout')
    .then(res => {
      localStorage.setItem('login',false)
      console.log(res)
      window.location.href = 'http://localhost:1000/login'
    })
  }

  return (
    <div className='nav'>
        <ul>
            <li key={'home'}><Link to='/'> home-page </Link></li>
            <li key={'login'}><Link to='/login'> Login </Link></li>
            <li key={'register'}><Link to='register'>Register</Link></li>
            <li key={'products'}><Link to='/products'> shop </Link></li>
            <li key={'MyProducts'}><Link to='/MyProducts'> MyProducts </Link></li>
            <li key={'cart'}><Link to='/cart'> cart </Link></li>
            <li><button onClick={logout}>logout</button></li>

        </ul>
    </div>
  )

 
}

export default Navbar