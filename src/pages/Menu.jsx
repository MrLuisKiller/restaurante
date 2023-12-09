import React from 'react'
import MenuData from '../data/Menu.json'
import MenuItem from '../components/MenuItem'

const Menu = () => {
    return (
        <div className='container'>
            <div className="row gap-4">
                {MenuData.map((Menu, index) => <MenuItem Menu={Menu} key={index} />)}
            </div>
        </div>
    )
}

export default Menu