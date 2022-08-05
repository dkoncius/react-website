import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './pages/Index';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
