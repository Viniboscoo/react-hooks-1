import React from "react"
import './estiloConteudo01.css'
import { useParams } from 'react-router-dom'
import ibagem from './logo.png'

const Conteudo01 = props => {

    const { usuario } = useParams()

    return (
        <div>
          
          
            <h3> <img src={ibagem}height="500px" /> </h3>
        </div>
    )
}

export default Conteudo01
