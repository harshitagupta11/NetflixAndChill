
import React, { useEffect, useState } from 'react';
import axios from './api/axios';
import requests from './api/request';
import './Banner.css'
function Banner(props) {
    const [movie,setMovie]=useState({});

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)   //get random movie from requested movies array
            ])
            // 
            
            return request;
        }
        fetchData()
    },[])
    
    const truncate=(string,n)=>{
        return string?.length>n?string.substr(0,n-1)+'...':string;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}') `,
            backgroundPosition:"center center"
            
        }}
        >
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.title|| movie?.name||movie?.original_name}</h1>    
            <div className="banner_buttons">
                <button>
                    Play
                </button>
                <button>
                    My List
                </button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview,200)}
                
            </h1>
        </div>   
        <div className="banner--fadeBottom"/>
        </header>
    );
}

export default Banner;