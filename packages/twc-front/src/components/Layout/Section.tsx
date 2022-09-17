import React from 'react';
import Dday from './Dday';

const title = {
  title: 'Ooo'
}
const Section = () => {
  const userdata = {
    name: '하나',
  }
  const workOutProverbs = [
    '오늘은 운동을 하지 않았다.',
    '운동하지 않는 자 먹지도 말라',
    '운동은 먹는 것보다 더 중요하다.',
    '몸을 만들고 싶으면 말로 떠들지 말고 30분이라도 운동하라.'
  ]
  const workOutProverb = workOutProverbs[Math.floor(Math.random() * workOutProverbs.length)];

  return (
    <>
    <section className='flex flex-col justify-center items-center
     w-full h-screen'>
      <div className='max-w-[80%] absolute flex flex-col justify-center items-center text-center '>
        <h1 className='text-4xl translate-y-[-20rem] font-bold text-white opacity-40'>"{workOutProverb}"</h1>
        </div>
        <div className='p-6 translate-y-[-8rem]'>
        <h1 className='mb-3 font-bold text-9xl text-white'>
          {title.title}
        </h1>
        <Dday name={userdata.name}></Dday>
        </div>
      </section>
    </>
  );
}

export default Section;