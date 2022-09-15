import Header from './Header';
import React from "react"
import Footer from './Footer';
import Section from './Section';
class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
          <Section/>
        <Footer/>
      </>
    )
  }
}
export default Layout;