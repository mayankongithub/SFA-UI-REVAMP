import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login_page from './components/Login_page'
import Home_Page from './components/Home_Page'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Router>
      {!submitted ? (
        <Login_page setSubmitted={setSubmitted} />
      ) : (
        <Home_Page />
      )}
    </Router>
  )
}

export default App


