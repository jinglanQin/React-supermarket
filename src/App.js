import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import HomeView from "./view/HomeView";
import SearchProduct from "./presenter/searchProduct";
import MultiFunctions from "./presenter/multiFunction";
import NavBar from "./view/navBar";

const App =()=>{
  return (
      <Routes>
          <Route path="" element={<NavBar/>}></Route>
          <Route path="staff" element={<MultiFunctions/>}></Route>
          <Route path="customer" element={ <SearchProduct/>}></Route>

        </Routes>
  )};


export default App;
