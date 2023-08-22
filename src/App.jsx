import { Home } from '@mui/icons-material'
import './App.css'
import HomePage from './pages/home.page/home.page'
import SignupPage from './pages/signup.page/signup.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route index path='/signup' element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
