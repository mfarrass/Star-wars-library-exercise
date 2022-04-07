import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import style from './result.module.css'

// Movie ID, simulasi mengambil ID berupa judul
const movieId = {
  'A New Hope': 1,
  'The Empire Strikes Back': 2,
  'Return of the Jedi': 3,
  'The Phantom Menace': 4,
  'Attack of the Clones': 5,
  'Revenge of the Sith': 6
}

const Result = (props) => {
  return (
    <div className={style.result_container}>
      {/* kondisi length kurang dari 0 (Ketika tampilannya kosong) */}
      {props.movieList.length  <= 0 && <h4>No movies at the moment</h4>}
      {/* kondisi length lebih dari 0 */}
    {props.movieList.length > 0 && props.movieList.map( (movie, index) => {
      return (
        // menarik value dari mobie title diatas
       <Link to ={`/movie/${movieId[movie.title]}`}><MovieCard movie={movie} key={index} /></Link> 
    )
    })}
    </div>
  )
}


// jadi kalo mau style komponen dari file css dan bootstrap digabung harus mengunakan `${style.result_container} col-md komponen bootstrap lah`
export default Result