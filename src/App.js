import './App.css';
import JobPage from './pages/jobs';
import HomePage from './pages/home';
import Login from './pages/login';
// import BasicProfile from './pages/profile/basic';
import Profile from './pages/profile';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HomePage />} />
        <Route path="jobs" element={<JobPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
