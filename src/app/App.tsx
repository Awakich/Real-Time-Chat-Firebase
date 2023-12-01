import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<div>123</div>} />
      <Route path='/:id' element={<div>456 id</div>} />
      <Route path='*' element={<div>404 Page Not Found</div>} />
    </Routes>
  )
}

export default App