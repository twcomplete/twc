import React from 'react';
import Dday from './dday';

const Section = () => {
  return (
    <>
    <section className='flex justify-center items-center
    bg-indigo-400 w-full h-screen'>
        <h1 className='font-bold text-3xl'>Ooo</h1>
        <Dday name="hana"></Dday>
      </section>
    </>
  );
}

export default Section;