//import { useState } from 'react'
import appLogo from '../assets/icons/logo.svg'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Home.scss'
function Home() {
 
  return (
    <>
      <div className='card'>
          <img src={appLogo} className="logo" alt="App logo" />
      <h1>Tic Tac Toe</h1>
        <p>
          Dive into the excitement now and experience the timeles joy of this classic game!
        </p>   
        <button className='btn newgame'>New Game</button><br />
        {/* <div className="box"></div> */}
      </div>
   
    </>
  )
}

export default Home
