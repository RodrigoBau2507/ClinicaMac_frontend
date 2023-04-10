import { useState, useEffect } from 'react'

import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes';

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [telefono, setTelefono] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [id, setId] = useState(null)

  const [alerta, setAlerta] = useState(false)

  const { guardarPaciente, paciente } = usePacientes()

  useEffect(() => {
    if (paciente?.nombre) {
      setNombre(paciente.nombre)
      setApellido(paciente.apellido)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setTelefono(paciente.telefono)
      setSintomas(paciente.sintomas)
      setId(paciente._id)
    }

  }, [paciente])




  const handleSubmit = e => {
    e.preventDefault()

    // validar el formulario
    if ([nombre, apellido, email, fecha, telefono, sintomas].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })

      setTimeout(() => {
        setAlerta(false)
      }, 5000);
      return;
    }



    guardarPaciente({ nombre, apellido, email, fecha, telefono, sintomas, id })
    setAlerta({
      msg: 'Guardado Correctamente'
    })


    

    setTimeout(() => {
      setAlerta(false)
    }, 5000);

    setNombre('')
    setApellido('')
    setEmail('')
    setFecha('')
    setTelefono('')
    setSintomas('')
    setId('')
  }

  const { msg } = alerta
  return (
    <>
      <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade tus pacientes y {''}
        <span className="text-teal-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-slate-400 py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md sticky top-8"

        onSubmit={handleSubmit}
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold"

          >Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="apellido"
            className="text-gray-700 uppercase font-bold"

          >Apellido</label>
          <input
            id="apellido"
            type="text"
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={apellido}
            onChange={e => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-gray-700 uppercase font-bold"

          >Email </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="text-gray-700 uppercase font-bold"

          >Fecha Alta</label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="telefono"
            className="text-gray-700 uppercase font-bold"

          >Telefono </label>
          <input
            id="telefono"
            type="telefono"
            placeholder="Telefono"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="text-gray-700 uppercase font-bold"
          >Síntomas</label>
          <textarea
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-teal-600 w-full p-3 text-white uppercase font-bold hover:bg-teal-700 cursor-pointer transition-colors"
          value={id ? 'Guardar Cambios' : "Agregar Paciente"}

        />
      </form>
    </>
  )
};

export default Formulario;
