import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter } from "react-router";
import Login from './login/Login';
import Register from './register/Register';
import MyPage from './mypage/MyPage';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        {/* <Register /> */}
        <MyPage />
      </BrowserRouter>
    </>
  )
}

export default App
