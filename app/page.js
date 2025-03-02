"use client"
import React, { useState } from 'react'
import HardCodeData from "./movies_data";
import Header from './header.js';
import Movie_panel from './movie_panel';

function page() {
  const [data, setData] = useState(HardCodeData);
  console.log(data,"page-data")

  return (
    <div className='container'>
      <Header />
      <Movie_panel data={data} />
    </div>
  )
}

export default page