import React from 'react'
import Gallery from '../pages/Gallery'

const Header = () => {

    return (
        <div className='bg-slate-600 w-full h-28 flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center'>
                <h1 className='text-white text-4xl font-bold pl-2 mx-4'>Image Nation</h1>
                <div className='border w-28 h-12 justify-items-center rounded-3xl flex items-center justify-center mx-6 mt-2' onClick={Gallery}>
                    <a className='text-white' href='Gallery'>Gallery</a>
                </div>
            </div>
            <div className='mt-2 mx-9'>
                <input className='w-64 h-12 rounded-3xl pl-5 pb-0.5' placeholder='Search'></input>
            </div>
        </div>
    )
}

export default Header