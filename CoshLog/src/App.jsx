import { Routes, Route } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/home'
import './App.css'
import Error from './pages/error'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/*" element={<Error/>} />
      <Route path="/login" element={<div>로그인</div>} />
    </Routes>
  )
}

export default App