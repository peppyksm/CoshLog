import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react';
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
import { AnimatePresence, motion } from "motion/react";
import Search from './pages/Search';
import CreateTeam from './pages/CreateTeam';
import TeamRoom from './pages/TeamRoom';
import TeamPostWrite from './pages/TeamWrite';


function App() {
  const location = useLocation();

  // 이거 레벨링 시스템 시작부분임 ㅇㅇ
  const userData = JSON.parse(localStorage.getItem('user'));
  const userIndex = JSON.parse(localStorage.getItem('index'));
  useEffect(() => {
    if (userData) {
      if (userData[userIndex].exp >= userData[userIndex].needExp) {
        userData[userIndex].level += 1;
        userData[userIndex].exp -= userData[userIndex].needExp;
        userData[userIndex].needExp += 20;
        localStorage.setItem('user', JSON.stringify(userData));
      }
    }
  }) // 레벨링 시스템 끝부분임 ㅇㅇ

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/mypage" element={<Page><MyPage /></Page>} />
          <Route path="/forum/fe/html" element={<Page><Html /></Page>} />
          <Route path="/forum/fe/css" element={<Page><Css /></Page>} />
          <Route path="/forum/fe/javascript" element={<Page><JavaScript /></Page>} />
          <Route path="/forum/fe/react" element={<Page><React /></Page>} />
          <Route path="/forum/be/java" element={<Page><Java /></Page>} />
          <Route path="/forum/be/node" element={<Page><Node /></Page>} />
          <Route path="/forum/be/python" element={<Page><Python /></Page>} />
          <Route path="/forum/be/go" element={<Page><Go /></Page>} />
          <Route path="/forum/write" element={<Page><Write /></Page>} />
          <Route path="/game/blankgame" element={<Page><Quiz /></Page>} />
          <Route path="/team/recruitment" element={<Page><TeamRecruitment /></Page>} />
          <Route path="/team/private" element={<Page><TeamPrivate /></Page>} />
          <Route path="/rank/level" element={<Page><Ranking /></Page>} />
          <Route path="/viewpost/:id" element={<Page><ViewPost /></Page>} />
          <Route path="/search" element={<Page><Search /></Page>} />
          <Route path="/createteam" element={<Page><CreateTeam /></Page>} />
          <Route path="/team/:teamId" element={<TeamRoom />} />
          <Route path="/team/:teamId/write" element={<TeamPostWrite />} />

        </Route>

        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/register" element={<Page><Register /></Page>} />
        <Route path="/*" element={<Page><Error /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}


export default App