
import './App.css'
import {Outlet} from 'react-router-dom'

function App() {
  

  return (<div className='bg-gray-200 min-h-screen'>
    <Outlet />
  </div>
  )
}

export default App
