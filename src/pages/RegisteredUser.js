import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/registereduser.css';

function RegisteredUser() {
  const [userData, setUserData] = useState(null);
  const [userRecipes, setUserRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get('token'); 

  useEffect(() => {
    if (!token) {
      setErrorMessage('Token missing or invalid. Redirecting to login...');
      setTimeout(() => navigate('/login'), 3000); 
      return;
    }

    // Fetch user data with token
    axios
      .get('http://localhost:5000/user', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setUserData(response.data.user);
        setUserRecipes(response.data.recipes);
      })
      .catch((err) => {
        console.error('Error fetching user data:', err);
        setErrorMessage('Failed to fetch user data. Please try logging in again.');
        setTimeout(() => navigate('/login'), 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div className="error-message">{errorMessage}</div>;
  }

  return (
<div className="registered-user-page">
  <div className="pagename">
    <h1>Welcome, {userData?.UserName}</h1>
    <h2>Been active since: {new Date(userData?.AccountCreatedOn).toLocaleDateString()}</h2>
    <h2>Number of recipes made: {userRecipes.length}</h2>
  </div>
  <main>
    <section id="recipes">
      <h2>My Recipes</h2>
      <div className="recipes">
{userRecipes.length > 0 ? (
  userRecipes.map((recipe, index) => (
    <div className="recipe" key={index}>
  <div className="recipepic">
    <img
      src={`../assets/recipe${index + 1}.jpg`}
      alt={recipe.recipeName || 'Recipe'}
      onError={(e) => (e.target.src = '../assets/default-recipe.jpg')}
    />
  </div>
  <div className="recipetext">
    <h3>{recipe.recipeName}</h3>
    <p>{recipe.description || 'Short description...'}</p>
    <button className="tab-button">View Recipe</button>
  </div>
    </div>
  ))
) : (
  <p>No recipes found. Start adding some!</p>
)}
      </div>
    </section>
    <section id="favourites">
<h2>Favourites</h2>
<div className="recipes">
  <div className="recipe">
    <div className="recipepic">
      <img src="../assets/favorite.jpg" alt="Favourite Example" />
    </div>
    <div className="recipetext">
      <h3>Favourite Recipe</h3>
      <p>Short description...</p>
      <button className="tab-button">View Recipe</button>
    </div>
  </div>
</div>
    </section>
  </main>
</div>
  );
}

export default RegisteredUser;
