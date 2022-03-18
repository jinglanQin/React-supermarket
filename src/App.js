import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import HomeView from "./view/HomeView";
import SearchProduct from "./presenter/searchProduct";
import MultiFunctions from "./presenter/multiFunction";

const App =()=>{
  return (
      <Routes>
          <Route path="" element={<SearchProduct />}></Route>
          <Route path="staff" element={<MultiFunctions/>}></Route>

        </Routes>
  )};


export default App;
