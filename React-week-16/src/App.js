import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Info from './pages/Info';
import User from './pages/User';
import Error from './pages/Error';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about'>
        <Route index element={<About />} />
        <Route path=':username' element={<User />} />
      </Route>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/info' element={<Info />}/>
      <Route path='*' element={<Error />} />
    </Routes>
   </Router>
  );
}

export default App;
