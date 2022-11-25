import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const activeMenu = true

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hver:overflow-auto pb-10'>
      {activeMenu && (<>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={() => {}}
              className="items-center ml-3 mt-4 flex text-xl font-extrabold dark:text-white text-slate-900">
                <p>Uranus App</p> 
            </Link>
          </div>
        </>)} 
    
    </div>
  )
}

export default Sidebar