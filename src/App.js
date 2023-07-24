import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.css';
import Project from './components/Project/Project';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
