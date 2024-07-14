
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './Signup'
import Login from './Login'
import Home from './Home'
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
     <Route path='/home' element={<Home/>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
