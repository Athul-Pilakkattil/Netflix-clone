import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import "./Banner.css"

function Banner() {
  
  const [movie, setMovie] = useState('movie')
  
  useEffect(() => {
     try {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        let index=Math.floor(Math.random()*19);
        setMovie(response.data.results[index])
       })
     } catch (error) {
      alert('Please connect to internet')
     }
  
   
  }, [])
  
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie.title ? movie.title:movie.name}</h1>
            <div className='banner-btns'>
                <button className='banner-btn'>Play</button>
                <button className='banner-btn'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:''}</h1>

        </div>
        <div className='fade-bottom'></div>

        

    </div>
  )
}

export default Banner