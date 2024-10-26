import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pagesh/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pagesh/details/Details'
import SingUp from './pagesh/auth/SingUp'
import SingIn from './pagesh/auth/SingIn'
import Forget from './pagesh/auth/Forget'
import Navbar from './pagesh/navbar/Navbar'
import { Provider } from "react-redux"
import { store } from './redux/store'
import RoomList from './pagesh/roomlist/RoomList';


function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Details/:id' element={<Details />}></Route>
            <Route path="/SingUp/" element={<SingUp />} ></Route>
            <Route path="/SingIn/" element={<SingIn />} ></Route>
            <Route path="/RoomList/" element={<RoomList/>} ></Route>
            <Route path="/Forget/" element={<Forget />} ></Route>
          </Routes>
        </Provider>
      </BrowserRouter>

    </>
  )
}

export default App
