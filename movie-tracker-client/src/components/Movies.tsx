import Movie from './Movie';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieProvider';
import { MovieContextType, movie } from '../@types/movie';
import "./Movies.css"

const Movies = () => {
    const { personsMovies } = useContext(MovieContext) as MovieContextType
    const filteredMovies = personsMovies?.cast?.filter(movie => movie.release_date !== "")
    const dateSorted = filteredMovies?.sort(function (a, b) {
        return +new Date(a.release_date) - +new Date(b.release_date)
    })

    return (
        <div className='container'>
            {dateSorted?.map((movie: movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Movies;