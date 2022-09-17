import React from 'react'
import { LoginInput, LoginOutput, User, ActivityLog, AttendaceInformation } from '@twc/twc-models';

function Dday(props: { name: string }) {
  return (
    <div className="max-w-48">
      <div className="flex justify-center text-4xl items-center">
        <h1 className='text-white'>{props.name} 님</h1>
        <span>
        </span>
        </div>
    </div>
  )
}

export default Dday