 import React from "react";
import { BrowserRouter,Route,Routes,Link} from "react-router-dom"
import './App.css';

function HomePage(){
  return(
    <div>
      HomePage
    </div>
  )
}
function AboutPage(){
  return(
    <div>
      AboutPage
    </div>
  )
}

function NotFoundPage(){
  return(
    <div>
      NotFoundPage
    </div>
  )
}

function App() {
  return (
   <BrowserRouter>
   <header>
     <nav>
       <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/about">AboutPage</Link>
        </li>
       </ul>
     </nav>
   </header>
     <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/*" element={<NotFoundPage />}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
