import React from 'react'
import Cards from './../components/Cards';
import Footer from './../components/Footer';
import SecureSection from './../components/SecureSection';
import CompanySection from './../components/CompanySection';
import SwiperCard from './../components/SwiperCard';
import Navbar from './../components/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SecureSection/>
        <Cards/>
        <SwiperCard/>
        <CompanySection/>
        <Footer/>
    </div>
  )
}

export default Home
