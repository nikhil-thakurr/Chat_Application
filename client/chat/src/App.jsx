
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />

      </Routes>
      </BrowserRouter>
  )
}

export default App
