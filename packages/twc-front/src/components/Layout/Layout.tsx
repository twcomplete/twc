import Header from './Header';
import React from "react"
import Footer from './Footer';
import Section from './Section';
import Login from './Login';
import { LoginInput, LoginOutput, User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
class Layout extends React.Component {
  render(){
    return (
      <div className='flex flex-col'>
        <Header />
         <Section/>
          <Login/>
        <Footer/>
      </div>
    )
  }
}
export default Layout;