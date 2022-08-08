import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='nav'>
        <ul>
            <li key={'home'}><Link to='/'> home-page </Link></li>
            <li key={'login'}><Link to='/login'> Login </Link></li>
            <li key={'products'}><Link to='/products'> shop </Link></li>
            <li key={'MyProducts'}><Link to='/MyProducts'> MyProducts </Link></li>
            <li key={'cart'}><Link to='/cart'> cart </Link></li>

        </ul>
    </div>
  )

 
}

export default Navbar