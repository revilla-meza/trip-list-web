import React from 'react'
import {Link} from 'react-router-dom'
import add from './add.svg'
import past from './past.svg'
import items from './items.svg'

const NavBar = () => {


    return (
        <div className='flex flex-row border-gray-500 border-t inset-x-0 bottom-0 absolute fixed h-12'>
            <Link to='/past'>my trips</Link>
            <Link to='add'><img scr={add} alt='add'/>add trip</Link>
            <Link to=''>my items</Link>
        </div>
    )
}

export default NavBar;
