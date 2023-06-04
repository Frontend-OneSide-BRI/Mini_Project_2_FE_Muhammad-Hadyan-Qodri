import React from 'react'

const Card = (props) => {
    return (
        <>
            {props.content.map((value, index) => (
                <div key={index}>
                    <div className='border w-80 h-80 max-h-96 rounded-lg bg-slate-300 drop-shadow-lg hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:bg-slate-300'>
                        <img src={value.img} alt='' className='rounded-t-lg'></img>
                        <div className='p-3'>
                            <a className='font-bold text-xl' href='...'>{value.title}</a>
                            <p className='pt-1'>{value.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card