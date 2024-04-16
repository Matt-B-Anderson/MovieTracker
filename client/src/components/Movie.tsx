import React from 'react'
import { Card, CardHeader, CardBody, Image, Checkbox } from '@nextui-org/react'
import { movie } from '../@types/movie'

type Props = {
    movie: movie
}

const Movie: React.FC<Props> = ({ movie }) => {
    return (
        <Card className='py-3'>
            <Checkbox />
            <CardHeader className='pb-0 pt-2 px-4 grid grid-flow-col auto-cols-max'>
                <p className='text-tiny upercase font-bold'>{movie.title}</p>
                <small className='text-defualt-500'>{movie.release_date}</small>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
                <Image
                    alt='Movie Poster'
                    className='object-cover rounded-xl max-w-60 min-w-60'
                    src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
                />
            </CardBody>
        </Card>

    )
}

export default Movie;