import React from 'react'
import poke from '../assets/pokeball.png'

const Header = () => {
  return (
    <div className='flex justify-between w-full h-22 bg-gradient-to-r from-slate-500 to-slate-200 text-6xl font-bold'>
        <div className='px-6 pt-4 items-center'>
            <h1 className='flex font-vibes'>
                J<img src={poke} alt='' className='h-14 w-14 -rotate-12'/>na
            </h1>
        </div>
        <div className='font-roboto flex content-center justify-center py-4 text-3xl list-none mx-8 px-6 gap-6'>
            <li><a href="App.js">Home</a></li>
            <li><a href="About.jsx">About</a></li>
            <li><a href="https://janaltwinp-6a487.web.app/">Contact</a></li>
        </div>
    </div>
  )
}

export default Header