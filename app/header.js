import React from 'react'

function Header() {
  return (
    <div className='row header-row' >
      <div className='col-6 text'>
        Movie App
      </div>
      <div className='col-6'>
        <div className="search">
          <img className='search-img'
            src="./searchimage.png"
            alt="search icon"
          />
          <input
            className="input-box"
            type="text"
            placeholder="search movie..."
          />
        </div>
      </div>
    </div>

  )
}

export default Header;
