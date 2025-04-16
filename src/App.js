import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Chatbot from './Chatbot';


// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

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
                <h1>Welcome to Divis Website</h1>
                <img src="/swan.jpg" className="App-logo" alt="logo" />
                <p>
                  click on the chatbot displayed below to get your links!
                </p>

               {/* <MyButton /> */}
                {/* <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a> */}
              </header>
           
            </div>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>

        {/* Chatbot is fixed and appears on every page */}
        <Chatbot />
    </div>
  );
}

export default App;
