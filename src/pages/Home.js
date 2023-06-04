import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Slider from '../components/Slider'
import CardData from '../components/cardData'

const Home = () => {
  return (
    <div className='bg-white'>
      <Header />
      <div>
        <h3>Home</h3>
        <div className='m-10 flex flex-wrap gap-5 justify-center'>
          <Card content={CardData} />
        </div>
      </div>
      <div className='bg-slate-300'>
        <Slider />
      </div>
    </div>
  )
}

export default Home