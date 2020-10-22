import React, {useContext} from 'react'
import StaticContext from '../../context/StaticContext'

const Details = ({params})=> {

    const datosMagios = useContext(StaticContext)
    console.log(datosMagios)

    return (
        <h2>
            {
                datosMagios.mensaje
            }
        </h2>
    )
}

export default Details