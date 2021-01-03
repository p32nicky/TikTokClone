import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
      <div className="header">
          <Link to='/'>
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img className="personal" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/126349001_10220544603339885_7090331464698784954_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=XLwkOjIl8VUAX9AYg8D&_nc_ht=scontent-lax3-1.xx&oh=2b31bb09b39bbf9e49d67890ed9c1041&oe=60167B8B" />
        </div>
      </div>
      </div>
    );
  }
  
  export default Header;
  