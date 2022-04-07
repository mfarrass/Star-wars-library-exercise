import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './movie.module.css'

const Movie = () => {

    const param = useParams()
    // useState dengan parameter null disini ketika mengunjungi halaman datanya kosong //
    const [movie,setMovie] = useState(null)

    useEffect(() => {
    fetch(`https://swapi.dev/api/films/${param.id}`)
    .then( response => {
        return response.json()
    })
    .then(data => {
        setMovie({...data})
    })
},[])

    return (
        <div>
            {/* kondisional ketika movie sudah tidak sama dengan null, menampilkan ketika kondisinya true saja tidak ada false */}
            {/* {} kurung keriting disini untuk membungkus dan menandakan bahwa syntaxnya menggunakan javascript */}
            { movie !== null &&
                <>
                    <h1>Episode {movie.episode_id}: {movie.title}</h1>
                    <p>{ movie.opening_crawl }</p>

                    <h3 className={style.detail_title}>Director</h3>
                    <p className={style.detail}>{movie.director}</p>

                    <h3 className={style.detail_title}>Producer</h3>
                    <p className={style.detail}>{movie.producer}</p>

                    <h3 className={style.detail_title}>Release Date</h3>
                    <p className={style.detail}>{movie.release_date}</p>
                </>
            }
        </div>
    )
}

export default Movie