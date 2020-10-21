import React from 'react'
import './Gif.css'

const Gift = ({id,title,url}) =>{

    return (
        <a href={`#${id}`} className='Gif'>
          <h5>{title}</h5>
          <img src={url} alt={title}  />
        </a>
      )
}

export default Gift