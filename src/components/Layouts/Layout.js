import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Herosection from '../Hero-section/Herosection'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
const Layout = () => {
  return <Fragment>
    <Header/>
    <Herosection/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </Fragment>
}

export default Layout
