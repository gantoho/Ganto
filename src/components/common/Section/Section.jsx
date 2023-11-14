import { Route, Routes, Navigate } from 'react-router-dom'

import './Section.scss'

import Home from '../../../pages/Home'
import Bookmarks from '../../../pages/Bookmarks'
import Project from '../../../pages/Project'
import ChatGPT from '../../../pages/ChatGPT'

export default function Section() {

  function Redirect({ to }) { // 这里用到了对象的解构，和上方的效果相同
    return <Navigate to={to} />
  }

  return (
    <div className='section'>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/dev" element={<Project />} />
          <Route path="/chat" element={<ChatGPT />} />
          <Route path="*" element={<Redirect to="/home" />} />
        </Routes>
      </div>
    </div>
  )
}
