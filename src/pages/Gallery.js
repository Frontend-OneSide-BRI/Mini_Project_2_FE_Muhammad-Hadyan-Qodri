import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import CardData from '../components/cardData'

const Gallery = () => {
    return (
        <div className='bg-white'>
            <Header />
            <h3>Home, Gallery</h3>
            <div className='m-10 flex flex-wrap gap-5 justify-center'>
                <Card content={CardData} />
            </div>
        </div>
    )
}

export default Gallery