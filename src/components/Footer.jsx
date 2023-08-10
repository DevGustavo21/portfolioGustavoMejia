import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-y-8 items-center my-20 px-10'>
        <img src={logo} alt="" className='w-[70px]'/>
        
        <div className='w-full h-[1px] bg-indigo-100'></div>
        
        <nav>
            <ul className='flex gap-x-10 text-slate-600 font-medium duration-300 ease-in-out'>
                <li className='hover:text-slate-800'>
                    <Link to={'/about'}>About</Link>
                </li>
                <li className='hover:text-slate-800'>
                    <Link to={'/experience'}>Experience</Link>
                </li>
                <li className='hover:text-slate-800'>
                    <Link to={'/works'}>Works</Link>
                </li>
            </ul>
        </nav>
    </footer>
  )
}
