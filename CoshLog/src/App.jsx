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
import Quiz from './quiz/Quiz';
import Ranking from './ranking/Ranking';
import Write from './pages/Write';
import TeamRecruitment from './pages/TeamRecruitment';
import TeamPrivate from './pages/TeamPrivate';
import ViewPost from './pages/ViewPost';


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
        <Route path='/forum/write' element={<Write />} />
        <Route path="/game/blankgame" element={<Quiz />} />
        <Route path="/team/recruitment" element={<TeamRecruitment />} />
        <Route path="/team/private" element={<TeamPrivate />} />
        <Route path="/rank/level" element={<Ranking />} />
        <Route path="/viewpost/:id" element={<ViewPost />} />

      </Route>

      <Route path="/*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App