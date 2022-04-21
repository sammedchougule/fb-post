import React from 'react';
import  "./Header.css";
import { MdHome, MdFlag, MdOndemandVideo, MdStore, MdPeople, MdVideogameAsset} from "react-icons/md";



function Header() {
  return <div className="header">

      <div className='header__center'>
          <div className='header__option header__option-active'>
              <MdHome size={30}/>
          </div>
          <div className='header__option'>
              <MdFlag size={30}/>
          </div>
          <div className='header__option'>
              <MdOndemandVideo size={30}/>
          </div>
          <div className='header__option'>
              <MdStore size={30}/>
          </div>
          <div className='header__option'>
              <MdPeople size={30}/>
          </div>
          <div className='header__option'>
              <MdVideogameAsset size={30}/>
          </div>
      </div>
  </div>;
  
}

export default Header;