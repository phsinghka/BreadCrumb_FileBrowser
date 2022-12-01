import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.component';
import Explorer from './components/Explorer.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='path/*' element={<Explorer />} />
    </Routes>
  );
}

export default App;
