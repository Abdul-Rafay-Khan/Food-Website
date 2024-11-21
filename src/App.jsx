import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headlinecard from './components/Headlinecard'
import Food from './components/Food'
import Category from './components/Category'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Headlinecard/>
      <Food/>
      <Category/>
    
    </div>
  )
}

export default App