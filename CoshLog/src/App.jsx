import { Routes, Route } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import './App.css'
import Login from './login/Login';
import Register from './register/Register';
import MyPage from './mypage/MyPage';
import Error from './pages/Error'
import Html from './pages/forum/Html'
import Css from './pages/forum/Css'
import JavaScript from './pages/forum/JavaScript'
import React from './pages/forum/React'
import Java from './pages/forum/Java'
import Node from './pages/forum/Node'
import Python from './pages/forum/Python'
import Go from './pages/forum/Go'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/forum/fe/html" element={<Html />} />
        <Route path="/forum/fe/css" element={<Css />} />
        <Route path="/forum/fe/javascript" element={<JavaScript />} />
        <Route path="/forum/fe/react" element={<React />} />
        <Route path="/forum/be/java" element={<Java />} />
        <Route path="/forum/be/node" element={<Node />} />
        <Route path="/forum/be/python" element={<Python />} />
        <Route path="/forum/be/go" element={<Go />} />
        <Route path="/game/blankgame" element={<div>빈칸맞추기게임</div>} />
        <Route path="/team/recruitment" element={<div>구인/구직 게시판</div>} />
        <Route path="/team/private" element={<div>팀 전용 작업실</div>} />
        <Route path="/rank/level" element={<div>레벨 랭킹</div>} />
      </Route>

      <Route path="/*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App