
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import DietInput from './components/DietInput'
import DietPlan from './components/DietPlan'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/input' element={<DietInput />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/input/plan' element={<DietPlan />} />
          {/* <Route path='*' element={<h1>Error:404 Page not found</h1>} /> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
