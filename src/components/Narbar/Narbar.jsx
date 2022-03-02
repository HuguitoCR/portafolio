import './Narbar.css'
//import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
//HiOutlineMenu
import { useState } from 'react';


const Narbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);
  return(
    <header className="Header">
      <nav className='Navbar'>
        <a href='/' className='Title'>HyūgoDev</a>
       
        <ul className={showMenu ? 'Lista-B' : 'Lista'}
          onClick={() => setShowMenu(false)}>
        
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='#footer'>Contact</a></li>
        </ul>
         <button onClick={() => setShowMenu(!showMenu)}>
            <HiOutlineMenu className='Icon-bar' />
        </button>
      </nav>
    </header>
  )
}

export default Narbar;