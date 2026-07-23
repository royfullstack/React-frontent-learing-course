import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'
import Detail from './components/pages/Detail'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import MyCourses from './components/pages/account/MyCourses'
import ChangePassword from './components/pages/account/ChangePassword'
import MyLearning from './components/pages/account/MyLearning'
import WatchCourse from './components/pages/account/WatchCourse'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    



      <Route path='/account/changepassword' element={<ChangePassword />} />
      <Route path='/acount/courses-enrolled' element={<MyLearning />} />
      <Route path='/account/my-courses' element={<MyCourses />} />
      <Route path='/account/watch-course' element={<WatchCourse />} />




     </Routes>
     </BrowserRouter>
          
    </>
  )
}

export default App
