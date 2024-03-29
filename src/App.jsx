import React, { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import "./CSS/app.css"
import axios from 'axios';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  const [data, setData] = useState(null)  
  
  const [dataError, setDataError] = useState(false)
        
  useState(()=>{
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
    .then((response) =>{
        if (response.data.success) {
          console.log(response.data)
            setData(response.data)
            setDataError(false)
        }
        else{
            setDataError(true)
        }
    })
    .catch((error) => {
      console.log(error);
    })
  })

  if (dataError) {
    return <div>Unable to fetch the data</div>
  }

  return (
    <div>
{data?<div className='main-conatiner'>
    <Navbar 
    about = {data.user.about}
    />
    <Home  
    about = {data.user.about}
    skills = {data.user.skills}
    />
    <About 
    about = {data.user.about}
    />
    <Services 
      services = {data.user.services}
    />
    <Projects 
      projects = {data.user.projects}
    />
    <Timeline 
      timeline = {data.user.timeline}
    />
    <Testimonials 
      testimonials = {data.user.testimonials}
    />
    <Contact 
      about = {data.user.about}
      icons = {data.user.social_handles}
    />
    <Footer />
    </div>:<div className='loader'>
    <div class="content">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
</div>
    </div>}
    </div>
  )
}

export default App