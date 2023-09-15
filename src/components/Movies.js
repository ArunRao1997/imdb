import React from 'react'

const Movies = () => {
    return (
        <div>
            <div className='text-2xl mb-8 font-bold text-center'>
                Trending Movies
            </div>

            <div className='flex'>
                <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:[40vh] md:[180px] hover:scale-110 duration-300 relative flex items-center' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQfWF1QCraNzDnaB7E3GfCGh4w8hpV5lZIg&usqp=CAU)` }}>

                </div>
                <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:[40vh] md:[180px] hover:scale-110 duration-300 relative flex items-center' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQfWF1QCraNzDnaB7E3GfCGh4w8hpV5lZIg&usqp=CAU)` }}>

                </div>
            </div>
        </div>
    )
}

export default Movies
