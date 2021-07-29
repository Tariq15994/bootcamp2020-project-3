import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
export default function Navbar(){
    return(
      <nav className='navbar'>
        
          <Link className='link'  to='/'>Home</Link>

          <Link className='link' to='/product'>Product</Link>
          
         
          
      </nav>
    )
}