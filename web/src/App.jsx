
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import ProjectsDetail from './pages/ProjectsDetails'


function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/projects' element={<ProjectsDetail />} />
      </Routes>
    </>
  )
}

export default App
