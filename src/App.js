import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'; 
import Footer from './components/footer'; 
import Home from './pages/Home';
import About from './pages/About';
import CreateRecipe from './pages/CreateRecipe';
import SignUp from './pages/Signup';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import RegisteredUser from './pages/RegisteredUser';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/RegisteredUser/:userId" element={<RegisteredUser />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;

