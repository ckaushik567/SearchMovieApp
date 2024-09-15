import React, { useEffect, useState } from 'react';
import './movie.css';

function Movie() {
    const [movie, setMovie] = useState([]);
    const [input,setInput] = useState();
    console.log(movie);

    const searchMovie = async(name) =>{
        await fetch(`http://www.omdbapi.com/?s=${name}&apikey=eb02cec9`)
            .then((res) => res.json())
            .then((res) => setMovie(res.Search));
    }

    // const searchMovie1 = async (e,name)=>{
    //     setInput(e.target.value)
    //     await fetch(`http://www.omdbapi.com/?s=${name}&apikey=eb02cec9`)
    //         .then((res) => res.json())
    //         .then((res) => setMovie(res.Search));
    // }


    const fetchApi = async () => {
        await fetch('http://www.omdbapi.com/?s=kabhi&apikey=eb02cec9')
            .then((res) => res.json())
            .then((res) => setMovie(res.Search))
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div className="container">
            <h1>Chanchal Kaushik's Movie Center</h1>
            <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Search Your Movie...' />
            <i onClick={()=>searchMovie(input)} class="icon fa-solid fa-magnifying-glass"></i>
            <div className="card-section">

                {movie.map((item) => {
                    return <>
                        <div className="cards">
                            <img src={item.Poster} alt="" srcset="" />
                            <div className="title-section">
                                <p id='type'>{item.Type}</p>
                                <p id='title'>{item.Title}</p>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default Movie
