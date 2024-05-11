import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';

function App() {
  return (
    <>
   <Header />
   <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/card" element={<CardsDetails/>}/> 
   </Routes>
   </>
  );
}

export default App;
