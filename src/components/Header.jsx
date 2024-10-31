import React from 'react'

const Header = () => {
  return (
    <div className='w-full px-9 py-4 flex justify-between items-center bg-red-800 m-auto'>
      <div className='flex gap-1'>
        <img src='/images/mkflag.png'></img>
        <p className='text-white text-3xl font-bold'>МК</p>
      </div>
      <img src='/images/logo3.png'></img>
      <div className='flex gap-6 items-center'>
      <img src='/images/facebook.png'></img>
      <img src='/images/insta.png'></img>
      <img src='/images/yt.png'></img>
      <img src='/images/twitter.png'></img>
      </div>
    </div>
  )
}

export default Header
