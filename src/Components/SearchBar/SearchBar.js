import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import style from './searchbar.module.css'

// menit 08.00 //

// star-wars-library-03-setup_form


    

    const SearchBar = (props) => {

        const [characterOptions, setCharacterOptions] = useState(['option1','option2'])
        const [planetOptions, setPlanetOptions] = useState(['option1','option2'])
        const [speciesOptions, setSpeciesOptions] = useState(['option1','option2'])
    
        useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then( response => {
            return response.json()
        })
        .then( data => {
            // data result hanya menampilkan data result dari setiap value apinya saja
            setCharacterOptions([...data.results])
        })
        .catch( err => {
            console.log(err);  
        })

        fetch('https://swapi.dev/api/planets')
        .then( response => {
            return response.json()
        })
        .then( data => {
            setPlanetOptions([...data.results])
        })
        .catch( err => {
            console.log(err);  
        })

        fetch('https://swapi.dev/api/species')
        .then( response => {
            return response.json()
        })
        .then( data => {
            setSpeciesOptions([...data.results])
        })
        .catch( err => {
            console.log(err);  
        })
    },[])

    // MENARIK DATA DAN MENAMPILKAN DI RESULT
    const {register, handleSubmit } = useForm()
    // ketika formnya searchnya disubmit
    const onSubmit = (formData) => {
        // akan menfetch dari alamat films ini
        fetch('https://swapi.dev/api/films')
        .then(response => {
            return response.json()
        })
        .then( data => {
            // akan dimasukan state movie list yang dirender (menampilkan) di bagian result
            props.setMovieList([...data.results])
        })
    }



        return (
            <div>
                <form id="searc-movie" onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.search_container}>
                        <div className={style.search_group}>
                            <label htmlFor="character">Character</label>
                            <select name="character" id="character" {...register('character')}>
                            <option value="">--Select Character --</option>
                            {characterOptions.map( (item,index) => {
                                return (
                                    <option value={item.name} key={index}>{item.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className={style.search_group}>
                            {/* htmlFor sting yang sudah diresearch oleh javascript */}
                            <label htmlFor="planet">Planet</label>
                            <select name="planet" id="planet" {...register('planet')}>
                            <option value="">--Select Planet --</option>
                            {planetOptions.map( (item,index) => {
                                return (
                                    <option value={item.name} key={index}>{item.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className={style.search_group}>
                            <label htmlFor="species">Species</label>
                            <select name="species" id="species" {...register('species')}>
                            <option value="">--Select Species --</option>
                            {speciesOptions.map( (item,index) => {
                                return (
                                    <option value={item.name} key={index}>{item.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className={style.search_group}>
                            <label htmlFor="release_date">Release Date After</label>
                            <input type="date" name="release_date" {...register('release_date')} />
                        </div>
                        <div className={style.submit}>
                            <button type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
}


export default SearchBar