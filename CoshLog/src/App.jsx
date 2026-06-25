import { Routes, Route } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/home'
import './App.css'
import { BrowserRouter } from "react-router";
import Login from './login/Login';
import Register from './register/Register';
import MyPage from './mypage/MyPage';
import Error from './pages/error'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/forum/fe/html" element={<div>HTML게시판</div>} />
        <Route path="/forum/fe/css" element={<div>CSS게시판</div>} />
        <Route path="/forum/fe/javascript" element={<div>javascript게시판</div>} />
        <Route path="/forum/fe/react" element={<div>react게시판</div>} />
        <Route path="/forum/be/java" element={<div>java 게시판</div>} />
        <Route path="/forum/be/node" element={<div>node게시판</div>} />
        <Route path="/forum/be/python" element={<div>python게시판</div>} />
        <Route path="/forum/be/go" element={<div>go게시판</div>} />
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