import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const App = () => {
  const activeMenu = false;


  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <Tooltip title="Paramètres">
              <IconButton>
                <FiSettings />
              </IconButton>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-red-400'>
              Sidebar
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg bg-blue-400 border'>
              Sidebar w-0
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-bg navbar w-full'>
              Navbar
            </div>
          </div>

          <div>
            <Routes>

              {/* Dashboard */}
              <Route path="/" element='Dashboard' />
              <Route path="/dashboard" element='Dashboard' />

              {/* Pages */}
              <Route path="/production" element='Production' />
              <Route path="/encaissement" element='Encaissement' />
              <Route path="/clientele" element='Clientele' />
              <Route path="/sinistre" element='Sinistre' />
              <Route path="/reporting" element='Reporting' />
              <Route path="/parametre" element='Parametre' />

              {/* Utilistateur */}
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App