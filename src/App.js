import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Login from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Login from './pages/auth/Login';
import TeamManagment from './pages/teams/TeamManagment';
import Dailywork from './pages/teams/Dailywork';
import Landingpage from './pages/mainpage/Landingpage';
import About from './pages/mainpage/About';

function App() {
  return (
    <div >
      <Routes>
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/' element={<Landingpage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Layout/>} >
       <Route path='team' element={<TeamManagment/>} />
       <Route path='dailywork' element={<Dailywork/>} />
       </Route>
       <Route path='/home' element={<Landingpage/>}/>
       <Route path='/about' element={<About/>} />
      </Routes>
    
    </div>
  );
}

export default App;
