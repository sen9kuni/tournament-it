import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings'
import View from './pages/View'
import Welcome from './pages/Welcome'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/view' element={<View />} />
    </Routes>
  )
}

export default App
