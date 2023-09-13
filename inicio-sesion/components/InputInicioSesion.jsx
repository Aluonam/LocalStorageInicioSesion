import React, { useState} from 'react'

const InputInicioSesion = () => {

    const [datosUsuario, setDatosUsuario] = useState([])


  return (
    <>
    <div>Inicia sesión: </div>
        {datosUsuario}
        <br></br>
        <input type="text" onChange={(e)=>{setDatosUsuario(e.target.value)}}></input>
    </>
  )
}

export default InputInicioSesion