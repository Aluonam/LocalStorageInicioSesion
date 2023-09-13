import React, { useState} from 'react'

const InputInicioSesion = () => {

    const [datosUsuario, setDatosUsuario] = useState()

    const [datosLocal, setDatosLocal] = useState([])

    const handleGuardarDatos = () => {
        localStorage.setItem("nombre usuario", JSON.stringify(datosUsuario))
    }

  return (
    <>
    <div>Inicia sesión: </div>
        {datosUsuario}
        <br></br>
        <input type="text" onChange={(e)=>{setDatosUsuario(e.target.value)}}></input>
        <button onClick={()=>{handleGuardarDatos()}}>INICIAR SESIÓN</button>
        <button onClick={()=>{}}>Recuperar sesión</button>
    </>
  )
}

export default InputInicioSesion