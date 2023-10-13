import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './Components/Home/HomeComponent';

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
          <Route path="/*" element={<HomeComponent text = "My Button" onClickFunction ={() => {console.log("Works")}}/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
