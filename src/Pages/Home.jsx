import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Home.module.css'
import Bounce from 'react-reveal/Bounce';

const Home = () => {
  return (
    <main className={classes.home}>
     <Bounce cascade>
      <div>
      <h1>Welcome to Susboi's GitHub repos!</h1>
     <h2>We're delighted to have you here</h2>
     <h3>Click on the button below to check them out or use the navigation bar above</h3>
      </div>
     </Bounce>
     <NavLink to='/Repos' ><button>{'See repos'}</button></NavLink>
    </main>
  )
}

export default Home
