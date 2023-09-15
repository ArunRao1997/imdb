import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
    style={{
        backgroundImage: `url(https://3.bp.blogspot.com/-SHlg1T_y0aQ/T2gOHZD7fCI/AAAAAAAAPK8/Ee5jU3DoUO8/s1600/The+Avengers+International+Movie+Banners+-+Hulk,+Hawkeye,+Maria+Hill,+Iron+Man,+Nick+Fury,+Captain+America,+Black+Widow+&+Thor.jpg)`
    }}>
      <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 text-white text-center w-full'>
        Avengers
      </div>
    </div>
  )
}

export default Banner
