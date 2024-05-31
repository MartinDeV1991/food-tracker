import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import './App.css';
import PhotoPage from './Pages/PhotoPage';
import Chatbot from './Pages/Chatbot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
