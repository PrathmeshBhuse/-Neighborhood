  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Aboutus from './Components/Aboutus/Aboutus';
  import Info from './Components/Info/Info';
  import Ourservices from './Components/Ourservices/Ourservices';
  import Postcard from './Components/Postcard/Postcard';
  import Mainpage from './Components/mainPage/Mainpage';
  import Navbar from './Components/navbar/Navbar';
  import Login from './Components/Login/Login';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
        
            <Mainpage />
            <Ourservices />
            <Info />
            <Postcard />
            <Aboutus />
            <Routes>
            <Route path="/login" element={<Login />} />
           </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
