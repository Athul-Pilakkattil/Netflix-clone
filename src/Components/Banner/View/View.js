import React, { useEffect,useState ,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Youtube from 'react-youtube'

import '../View/View.css'
import {API_KEY} from '../../../Constants/constants'
import { MovieContext } from '../../../stores/MovieContext'
import axios from '../../../axios'

function View() {
    const [trailerUrl, setTrailerUrl]=useState('')
    const {movie}=useContext(MovieContext)
    console.log(movie)

    useEffect(() => {
        console.log(movie)
      axios.get(`movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!=0){
        setTrailerUrl(response.data.results[0])
      }
      else{
        console.log('trailer not available')
      }
    })
      
    }, [])
    const opts = {
      height: '450',
      width: '100%',
    }
    
  return (
    <div>
      <div className='trailer-sec'>
      { trailerUrl && <Youtube videoId={trailerUrl.key} opts={opts} />}
      <h1 className='trailer-alert'>{trailerUrl ? '':"Sorry, trailer not availble for this movie"}</h1>
      </div>

      <div className='details-sec'>
        <h1 className='heading'>{movie.title ? movie.title:movie.name}</h1>
      </div>

      <div className='view-btns'>
                <button className='view-btn'>Play</button>
                <button className='view-btn'>My List</button>
                
            </div>
            <h1 className='view-description'>{movie ? movie.overview:'Please select a movie from the home page...!'}</h1>     


    </div>
  )
}

export default View