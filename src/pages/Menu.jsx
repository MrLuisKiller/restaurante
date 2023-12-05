import React, { useState, useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Loading from '../components/Loading'

const Menu = () => {
    const [Menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    const Cargar = async () => {
        const datos = await getDocs(collection(db, 'menu'))
        let datosFormateados = datos.docs.map(doc => doc.data())
        setMenu(datosFormateados)
        setLoading(false)
    }

    useEffect(() => {
        Cargar()
    }, [])

    if (loading)
        return (<Loading />)

    return (
        <div className='container'>
            <div className="row gap-4">
                {Menu.map((Menu, index) => <MenuItem Menu={Menu} key={index} />)}
            </div>
        </div>
    )
}

export default Menu