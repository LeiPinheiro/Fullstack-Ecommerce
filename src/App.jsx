import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Header from './components/Header'
import NewArrivalsSec from './components/NewArrivalsSec'
import TopSelling from './components/TopSelling'
import CustomersSection from './components/CustomersSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
        </Routes>
      </Router>
      <NewArrivalsSec />
      <TopSelling />
      <CustomersSection />
      <Footer />
    </>
  )
}

export default App
