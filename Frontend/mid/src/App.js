import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Input from './Components/Input';
import Update from './Components/Update';
import Login from './Components/Login';
import Protected from './Components/Protected';
import Signup from './Components/Signup';
import UpdateUser from './Components/UpdateUser';

function App() {
  return (
   <>

   <BrowserRouter>
           <Navbar/>
          
            <Routes>


            
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
                
                  < Route    element={<Protected />}>
                  <Route path='/home' element={<Home />} />
                  <Route path='/input' element={<Input />} />
                  <Route path='/update' element={<UpdateUser />} />
                  <Route path='/register/:id' element={<Update />} />
                  </Route>
            </Routes>     


            <Footer/>
      </BrowserRouter>

   </>
  );
}

export default App;
