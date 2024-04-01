import React from 'react'
import { Card, CardHeader, CardBody, Image, Checkbox } from '@nextui-org/react'
import { movie } from '../@types/movie'

type Props = {
    movie: movie
}

const Movie: React.FC<Props> = ({ movie }) => {
    return (
        <Card className='py-4'>
            <Checkbox />
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                <p className='text-tiny upercase font-bold'>{movie.title}</p>
                <small className='text-defualt-500'>{movie.release_date}</small>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
                <Image
                    alt='Movie Poster'
                    className='object-cover rounded-xl'
                    src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                    width={270}
                />
            </CardBody>
        </Card>

    )
}

export default Movie;