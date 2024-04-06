import React from 'react'
import Search from './Search';
import Logo from './Logo';
import NumberOfResult from './NumberOfResult';

const Navbar = ({movies}) => {
   

  return (
    <nav className="nav-bar">
    
    <Logo/>

    <Search />
    
    <NumberOfResult movies={movies}/>
  </nav>
  )
}

export default Navbar