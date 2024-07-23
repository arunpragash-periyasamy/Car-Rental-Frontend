
import { useEffect } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from './utils/axios';
import { clearUser } from './utils/slices/userSlice';

function App() {
  const token = useSelector(store => store.user.token);
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      if (token !== null || token !== undefined) {
        const response = await axiosInstance.post("/users/expired");
        if (response.status !== 200) {
          throw 403
        }
      }
    }
    catch (err) {
      dispatch(clearUser());
    }
  }
  useEffect(() => { 
    validateToken();
  }, [])
  
  return (<div className='bg-gray-200 min-h-screen'>
    <Outlet />
  </div>
  )
}

export default App
