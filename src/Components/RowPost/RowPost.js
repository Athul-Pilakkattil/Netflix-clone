import React,{useEffect, useState,useContext } from 'react'
import Youtube from 'react-youtube'
import {useNavigate} from 'react-router-dom'


import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'
import "./RowPost.css"
import { MovieContext } from '../../stores/MovieContext'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl]=useState('')
  const {setMovie}=useContext(MovieContext)
  const navigate=useNavigate()
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
    
  
    
  }, [])

 

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>

        <div className='posters'>
          {
            movies.map((obj)=>{
              return(<img onClick={()=>{
                setMovie(obj)
                navigate('/view')
              }} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />)
            })
          }
        </div>

    </div>
  )
}

export default RowPost