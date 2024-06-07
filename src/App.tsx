import 'bootstrap/dist/css/bootstrap.min.css'
import {Navibar} from './Components/Navibar.tsx'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home.tsx'
import News from './News.tsx'
import { Footer } from './Components/Footer.tsx'

function App() {

  

  return (
    <>
      <Router>
      <Navibar></Navibar>
      <Routes>

        <Route path="/" Component={Home}></Route>
        <Route path="/news" Component={News}></Route>

      </Routes>
      </Router>
      
      <Footer></Footer>
    </>
  )
}

export default App
