import React from 'react'
import TechnologyItem from './TechnologyItem'
import html from '../img/html-5.png' 
import css from '../img/css-3.png' 
import javascript from '../img/js.png' 
import react from '../img/react.png' 
import tailwind from '../img/tailwind.png' 
import bootstrap from '../img/bootstrap.png' 
import wordpress from '../img/wordpress.png' 
import laravel from '../img/laravel.png' 
import mysql from '../img/mysql.png' 


export default function Tecnologies() {
  return (
    <div className='flex justify-center w-[800px] flex-wrap gap-x-16 gap-y-5 items-center'>
      <TechnologyItem icon={html}/>
      <TechnologyItem icon={css}/>
      <TechnologyItem icon={javascript}/>
      <TechnologyItem icon={react}/>
      <TechnologyItem icon={tailwind}/>
      <TechnologyItem icon={bootstrap}/>
      <TechnologyItem icon={wordpress}/>
      <TechnologyItem icon={laravel}/>
      <TechnologyItem icon={mysql}/>
    </div>
  )
}
