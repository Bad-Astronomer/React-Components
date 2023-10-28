import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomeComponent from './Components/Home/HomeComponent';
import PrimaryButton from './Components/PrimaryButton/PrimaryButton';
import Card from './Components/Card/Card';
import Follower from './Components/Follower/Follower';


function App() {

  return (
    <>
      {/* Routing demo
      <Routes>
        <Route path="usestate" element={<UseStateDemo/>}/>
        <Route path="/*" element={<HomeComponent/>}/>
      </Routes> 
      */}

      <div className="flex-container">
        <Routes>
          <Route path="/*" element={<HomeComponent/>}></Route>
          <Route path="/primaryButton" element={<PrimaryButton/>}></Route>
          <Route path="/card" element={<Card/>}></Route>
          <Route path="/follower" element={<Follower/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
