import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings'
import View from './pages/View'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Settings />} />
      <Route path='/view' element={<View />} />
    </Routes>
  )
}

export default App
