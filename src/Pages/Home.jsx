import React from 'react'
import  {Hero}  from '../components/Hero/Hero';
import  {Footer}  from '../components/Footer/Footer';
import { HomePage } from '../components/HomePage/HomePage';
import { Section } from '../components/Section/Section';

export const Home = () => {
  return (
    <div>
    <HomePage />
    <Hero />
    <Section />
    <Footer />
    </div>
  )
}

export default  Home;