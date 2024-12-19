import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Indonesia from './pages/Indonesia';
import News from './pages/News';
import Programming from './pages/Programming';
import Saved from './pages/Saved';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/programming">Programming</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Root URL (/) langsung mengarahkan ke /news */}
          <Route path="/" element={<Navigate to="/news" replace />} />
          <Route path="/news" element={<News />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
