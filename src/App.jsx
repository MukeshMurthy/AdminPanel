import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'

function App() {
  const [openSidebarToggle,SetOpenSidebarToggle]=useState(false)
  
  const Opensidebar=()=>{
    SetOpenSidebarToggle(!openSidebarToggle)
  }
  return(
    <div className='grid=container'>
      <Header Opensidebar={Opensidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle}/>
      <Home />
    </div>
  )
}

export default App
