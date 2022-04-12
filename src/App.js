import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import HomeView from "./view/HomeView";
import SearchProduct from "./presenter/searchProduct";
import MultiFunctions from "./presenter/multiFunction";
import NavBar from "./view/navBar";
import Map from "./presenter/indoorMap";

const App =()=>{
  return (
      <Routes>
          <Route path="" element={<SearchProduct/>}></Route>
          <Route path="staff" element={<MultiFunctions/>}></Route>
          <Route path="customer" element={ <SearchProduct/>}></Route>
          <Route path="map" element={<Map/>}></Route>
        </Routes>
  )};


export default App;
