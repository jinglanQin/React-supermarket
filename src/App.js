import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import HomeView from "./view/HomeView";
import SearchProduct from "./presenter/searchProduct";


const App =()=>{
  return (
      <Routes>
          <Route path="" element={<SearchProduct />} />

        </Routes>
  )};


export default App;
