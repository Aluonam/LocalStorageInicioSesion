import React, { useState} from 'react'

const InputInicioSesion = () => {

    const [datosUsuario, setDatosUsuario] = useState({})

    // ---------guardar datos
    const handleGuardarDatos = () => {
        localStorage.setItem("datos formulario", JSON.stringify(datosUsuario))
        setDatosUsuario("")

    }

    // ---------devolver datos
    const handleSacarDatos = () => {
        const datosLocal = localStorage.getItem("datos formulario")
        setDatosUsuario(JSON.parse(datosLocal))
    }

    //--------limpiar datos
    const handleCerrarSesion = () => {
        localStorage.removeItem("datos formulario")
    }

  return (
    <>
    <div>Inicia sesión: </div>
        <br></br>
        <input type="text" onChange={(e)=>{setDatosUsuario({...datosUsuario,nombre:e.target.value})}} value={datosUsuario.nombre ?? ""}></input>
        <input type='password' onChange={(e)=>{setDatosUsuario({...datosUsuario,password:e.target.value})}} value={datosUsuario.password ?? ""}></input>
        <button onClick={()=>{handleGuardarDatos()}}>INICIAR SESIÓN</button>
        <button onClick={()=>{handleSacarDatos()}}>Recuperar sesión</button>
        <button onClick={()=>{handleCerrarSesion()}}>Cerrar sesión</button>
    </>
  )
}

export default InputInicioSesion