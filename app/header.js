import React from 'react'
import Search_bar from "./searchbar"

function Header({ create_cards }) {
  return (
    <div className='row header-row' >
      <div className='col-6 text'>
        Movie App
      </div>
      <div className='col-6'>
        <Search_bar create_cards={create_cards} />
      </div>
    </div>

  )
}

export default Header;
