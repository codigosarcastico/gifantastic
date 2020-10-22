import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

const Gift = ({id,title,url}) =>{

    return (
        <Link to={`/gif/${id}`} className='Gif'>
          <h5>{title}</h5>
          <img src={url} alt={title}  />
        </Link>
      )
}

export default Gift