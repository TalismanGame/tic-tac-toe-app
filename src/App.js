import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch } from 'react-redux'

import './App.css';
import CustomRouter from './routes'
import { UserContextProvider } from "./context/UserContext";
import { GameContextProvider } from "./context/GameContext";

const App = () => {

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
        <GameContextProvider>
          <CustomRouter />
        </GameContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App;



