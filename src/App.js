import './App.css';
import {Deadend, Home, Shrink, Upload} from './components/index'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="app"> 
      <Router> 
        <Routes> 
          <Route  path="/" element={<Home />}/>
          <Route path="/shrink-url" element={<Shrink />}/>
          <Route path="/upload-file" element={<Upload />} />
          <Route path="*" element={<Deadend />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
