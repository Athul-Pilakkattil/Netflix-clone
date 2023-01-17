import React from 'react'
import Banner from '../Components/Banner/Banner'
import NavBar from '../Components/NavBar/NavBar'
import RowPost from '../Components/RowPost/RowPost'

import {originals,action,comedy,horror,romance,documentaries} from '../Urls/urls'

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost title='Only on Netflix' url={originals} />
        <RowPost title='Action' isSmall url={action}/>
        <RowPost title='Comedy' isSmall url={comedy}/>
        <RowPost title='Horror' isSmall url={horror}/>
        <RowPost title='Romance' isSmall url={romance}/>
        <RowPost title='Documentaries' isSmall url={documentaries}/>


    </div>
  )
}

export default Home