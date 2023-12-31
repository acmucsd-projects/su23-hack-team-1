import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import Pantry from './Components/Pantry'
import Dropdownbox from './Components/add-item-box'
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Add" element={<Dropdownbox />}></Route>
        <Route path="/Login" element={<Login />}></Route> 
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Pantry" element={<Pantry/>}></Route>
        <Route path="" element={<Navigate to="/Login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;