import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfoBox from './components/userInfoBox/UserInfoBox';
import Table from './components/table/Table'
import Layout from './components/Layout'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<UserInfoBox />}/>
      <Route path='/table' element={<Table />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
