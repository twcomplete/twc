import React from 'react'
import { LoginInput, LoginOutput, User, ActivityLog, AttendaceInformation } from '@twc/twc-models';

function Dday(props: { name: string }) {
  const data = new Date();
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const day = data.getDate();
  
  return (
    <div className="max-w-48">
      <div className="flex justify-center items-center">
        <h1>환영합니다{props.name}님</h1>
        <span>
          
        </span>
        </div>
    </div>
  )
}

export default Dday