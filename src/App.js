import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'

import './App.css';
import CustomRouter from './routes'
import { UserContextProvider } from "./context/UserContext";
import { changeUserInfo } from './actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeUserInfo({
      name: 'hossein',
      age: 26
    }))
  }, [])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserContextProvider>
        <CustomRouter />
      </UserContextProvider>
    </>
  )
}

export default App;



