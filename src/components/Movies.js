import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../Pagination'

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [watchList, setWatchList] = useState([])
    const [hover, SetHover] = useState('')
    // Pagination Methods
    const onNext = () => {
        setPageNum(pageNum + 1)

    }

    const onPrev = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
    }

    // Watchlist Handlers

    const addToWatchList = (movie) => {
        const newWatchList = [...watchList, movie]
        setWatchList(newWatchList)
        localStorage.setItem('imdb', JSON.stringify(watchList))
    }

    const removeFromwatchList = (movie) => {
        const filteredWatchList = watchList.filter((m) => {
            return m.id != movie.id
        })
        setWatchList(filteredWatchList)
        localStorage.setItem('imdb', JSON.stringify(watchList))
    }

    console.log(watchList)

    const showButton = (id) => {
        SetHover(id)
    }

    const hideButton = () => {
        SetHover('')
    }

    useEffect(() => {

        (function () {

            let moviesFromWL = localStorage.getItem('imdb')
            moviesFromWL = JSON.parse(moviesFromWL) || []
            setWatchList(moviesFromWL)

            axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1f85694bd0472fe3f3de828b8e6020b3&page=${pageNum}`).then((res) => {
                // console.log(res.data.results)
                setMovies(res.data.results)
            })
        })()
    }, [pageNum])

    // console.log(movies)

    return (
        <div>
            <div className='text-2xl mb-8 font-bold text-center'>
                Trending Movies
            </div>

            <div className='flex flex-wrap'>
                {movies.map((movie) => {
                    return <div

                        onMouseOver={() => showButton(movie.id)}
                        onMouseLeave={() => hideButton()}
                        key={movie.id} className='w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end'
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})` }}>

                        <div className='text-2xl p-2 bg-gray-900 rounded-2xl absolute right-2 top-2'
                            style={{ display: hover == movie.id ? 'block' : 'none' }}
                        >
                            {watchList.includes(movie) == false ? (
                                <div onClick={() => addToWatchList(movie)}>
                                    😍
                                </div>
                            ) : (
                                <div onClick={() => removeFromwatchList(movie)}>
                                    ❌
                                </div>
                            )}

                        </div>

                        <div className='text-white font-bold text-center w-full bg-gray-900 bg-opacity-60'>
                            {movie.title}
                        </div>
                    </div>
                })}

            </div>
            <Pagination pageNum={pageNum} onNext={onNext} onPrev={onPrev} />
        </div>
    )
}

export default Movies
