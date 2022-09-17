import { Fragment } from 'react'
import React from 'react'
import logo from '../../img/Ooo.svg';

const Header = () => {
  const data = new Date();
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const day = data.getDate();
  const today = new Date(year, month, day);
  const time = today.getTime();
  return (
    <header className='flex justify-evenly h-48 items-center text-white max-w-3xl m-auto'>
      <div className='rounded-full p-3 bg-white text-indigo-400 shadow-lg shadow-indigo-300/50 mr-3'>
      <img src={logo}
      width='60px'/>
      </div>
      <div className='rounded-full p-8 bg-white shadow-lg shadow-indigo-300/50 text-indigo-400 px-10 text-4xl'>
          <span className=''>
            {today.getFullYear()}년 {today.getMonth()}월 {today.getDate()}일
        </span>
        </div>
    </header>
  )  
}
export default Header;
