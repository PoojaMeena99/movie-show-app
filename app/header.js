import React from 'react'
import Search_bar from "./searchbar"

function Header({ createCard }) {
  return (
    <div className='row header-row' >
      <div className='col-6 text'>
        Movie & Show App
      </div>
      <div className='col-6'>
        <Search_bar createCard={createCard} />
      </div>
    </div>

  )
}

export default Header;
