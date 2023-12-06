import React, { useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, onSnapshot, addDoc, query } from 'firebase/firestore'

const Reservar = () => {
    const date = new Date()

    const [formulario, setFormulario] = useState([])
    const [datosTabla, setDatosTabla] = useState([])
    const [activo, setActivo] = useState(true)

    const cargarDatos = async () => {
        onSnapshot(query(collection(db, 'reservaciones')), querySnapshot => {
            let datosFormateados = querySnapshot.docs.map(doc => doc.data())
            setDatosTabla(datosFormateados)
        })
    }

    useEffect(() => {
        cargarDatos()
    }, [])

    const handleInputChange = e => {
        const { name, value } = e.target
        if (name == 'fecha') {
            const hoy = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date - getDate()}`
            setActivo(value >= hoy)
        }
        setFormulario({ ...formulario, [name]: value })
    }

    const guardarReservacion = async e => {
        e.preventDefault()
        await addDoc(collection(db, 'reservaciones'), formulario)
        setFormulario([])
        document.querySelector('form').reset()
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="Potta-One text-center">Reservar</h5>
                    <form onSubmit={guardarReservacion}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4 col-12">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text">Nombre</span>
                                    <input type="text" name="nombre" id="nombre" className="form-control" value={formulario.nombre} onChange={handleInputChange} autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text">Apellido</span>
                                    <input type="text" name="apellido" id="apellido" className="form-control" value={formulario.apellido} onChange={handleInputChange} autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text">Cantidad</span>
                                    <input type="number" name="cantidad" id="cantidad" className="form-control" value={formulario.cantidad} onChange={handleInputChange} autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text">Fecha</span>
                                    <input type="date" name="fecha" id="fecha" className="form-control" value={formulario.fecha} onChange={handleInputChange} autoComplete='off' />
                                </div>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text">Hora</span>
                                    <select name="hora" id="hora" className="form-select" value={formulario.hora} onChange={handleInputChange} disabled={!activo}>
                                        <option selected value=''>Escoge</option>
                                        <option value="1:00">1:00</option>
                                        <option value="2:00">2:00</option>
                                        <option value="3:00">3:00</option>
                                        <option value="4:00">4:00</option>
                                        <option value="5:00">5:00</option>
                                        <option value="6:00">6:00</option>
                                        <option value="7:00">7:00</option>
                                        <option value="8:00">8:00</option>
                                        <option value="9:00">9:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-grip gap-1 mb-2">
                            <button type="submit" className="btn btn-outline-success btn-lg w-100" disabled={!activo}>Reservar</button>
                        </div>
                    </form>
                    <table className="table table-striped text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Apellido</th>
                                <th scope='col'>Cantidad</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosTabla.map((dato, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.apellido}</td>
                                    <td>{dato.cantidad}</td>
                                    <td>{dato.fecha}</td>
                                    <td>{dato.hora}</td>
                                </tr>
                            ))}
                            {datosTabla.length == 0 && (
                                <tr className="table-danger">
                                    <td colSpan={6}>No hay Reservaciones</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Reservar