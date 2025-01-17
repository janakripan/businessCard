import React from 'react'
import landing from '../Assets/2a4e2db68d3b873e2a56bf68d59cd1f7.jpeg'
import Layouts from '../components/Layouts'
import DetailsForm from '../components/DetailsForm'

function Home() {
  return (
    <div className='w-full h-fit  max-w-screen-xl mx-auto'>

        <h1 className= 'px-4 text-5xl md:text-7xl lg:text-8xl text-center font-bold pt-40 text-gray-900 font-public'>
        Create Your Digital <br /> Business Card
        </h1>
        <img src={landing} className='mt-16 rounded-3xl ' alt="" />


        <section>
          <Layouts/>
        </section>

        <section>
          <DetailsForm/>
        </section>


      
    </div>


  )
}

export default Home
