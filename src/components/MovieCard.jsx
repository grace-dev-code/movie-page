import React from 'react'

const MovieCard = ({movie: {id, title, vote_average, poster_path, release_date, original_language}
}) => {
  return (
    <div className='movie-card'>
        <img src=
        {poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :
         '/assets/no-movie.png'} alt={title} />

        <div className='mt-4 text-center'>
            <h3>{title}</h3>

            <div className='content'>
                <div className='flex gap-2'>
                    <img className= 'max-w-6' src="/assets/star.svg" alt='Star Icon' />
                    <p> {vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    <div className='flex items-center justify-center gap-1.5 text-gray-700'>
                        <span>•</span>
                        <p className='lang'>{original_language}</p>
                        
                        <span>•</span>
                        <p className='year'>
                            {release_date ? release_date.split('-')[0] : 'N/A'}
                        </p>
                    </div>
                </div>

            </div>
        </div>



    </div>
  )
}

export default MovieCard