import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div className="App">
      {/* Navbar is placed here so it appears on all pages */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <header className="App-header">
                <h1>Welcome to Maami's Website</h1>
                <img src="/swan.jpg" className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <MyButton />
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
              <Home />
            </div>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
