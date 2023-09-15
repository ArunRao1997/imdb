import React from 'react'
import axios  from 'axios'

const Movies = () => {

    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1f85694bd0472fe3f3de828b8e6020b3`).then((res) => {
        console.log(res.data.results)
    })
    return (
        <div>
            <div className='text-2xl mb-8 font-bold text-center'>
                Trending Movies
            </div>

            <div className='flex'>
                <div className='w-[160px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:[40vh] md:[200px] hover:scale-110 duration-300 relative flex items-center'
                 style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQfWF1QCraNzDnaB7E3GfCGh4w8hpV5lZIg&usqp=CAU)` }}>
                    <div className='text-white font-bold text-center w-full bg-gray-900 bg-opacity-60'>
                        Hobbit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies
