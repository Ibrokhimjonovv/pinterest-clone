import React from 'react';
import "./header.scss";
import Search from '../search/search';
import ProfileImage from '../profileImage/profileImage';

const Header = () => {
  return (
    <div className='wH1s'>
      <Search />
      <ProfileImage />
    </div>
  )
}

export default Header