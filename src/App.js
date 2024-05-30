import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import './App.css';
import PhotoPage from './Pages/PhotoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
