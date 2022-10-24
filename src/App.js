import './App.css';
import {Deadend, Home, Shrink, Upload, Contact} from './components/index'
import {useState, useEffect} from 'react' 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
function App() {
  const [ loader, setLoader ] = useState(true)
  useEffect(() => {
    const onPageLoad = () => {
      setLoader(false)
    }
    if(document.readyState === 'complete'){
      onPageLoad()
    }else{
      window.addEventListener('load', onPageLoad)
    }
    return () =>{ document.removeEventListener('load', onPageLoad)}
  }, [])
  return (
    <div className='h-screen overflow-hidden'>
      {loader && <div className="h-screen flex justify-center  items-center"> 
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>}
      <div className="app" style={{visibility : loader ? 'hidden' : 'visible'}}> 
        <Router> 
          <Routes> 
                <Route  path="/" element={<Home />}/>
                <Route path="/shrink-url" element={<Shrink />}/>
                <Route path="/upload-file" element={<Upload />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Deadend />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}
export default App;
