import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Clientele, Encaissement, Parametre, Production, Reporting, Sinistre } from './pages';

import {UserLayout, LoginLayout} from './components/common/Layout'
import Login from './components/Auth/Login';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Dashboard */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Pages */}
            <Route path="/production" element={<Production />} />
            <Route path="/encaissement" element={<Encaissement />} />
            <Route path="/clientele" element={<Clientele />} />
            <Route path="/sinistre" element={<Sinistre />} />
            <Route path="/parametre" element={<Parametre />} />
            <Route path="/reporting" element={<Reporting />} />
          </Route>
          
          <Route element={<LoginLayout />}>
            <Route path="/connexion" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App