import React, { useState } from 'react'
import Navbar from './Navbar'
import { SideBar } from './Side_bar'

const Home_Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <div className="flex">
        <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-900">Home page</h1>
        </main>
      </div>
    </div>
  )
}

export default Home_Page
