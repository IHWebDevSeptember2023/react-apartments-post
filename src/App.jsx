
import './App.css'
import NavbarApartments from './components/Navbar'
import AddApartmentPage from './pages/AddApartmentPage'
import ApartmentsPage from './pages/ApartmentsPage'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <NavbarApartments />
      <Routes>
        <Route path='/' element={<ApartmentsPage />} />
        <Route path='/apartments/new' element={<AddApartmentPage />} />
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>

    </>
  )
}

export default App
