import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import './App.css';
import PhotoPage from './Pages/PhotoPage';
import NutritionPage from './Components/ShowFood';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoPage />} />
          <Route path="/food" element={<NutritionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
