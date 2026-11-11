
import './App.css'
import HomePage from './pages/homepage'
import ResultPage from './pages/ResultPage'
import UploadPage from './pages/UploadPage'
import { Route, Routes } from 'react-router'

function App() {
  

  return (
    <>
     

      <Routes>
        < Route path='/' element={<HomePage/>}/>
           < Route path='/result' element={<ResultPage/>}/>
              < Route path='/upload' element={<UploadPage/>}/>
      </Routes>


    
    </>
  )
}

export default App
