import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/registereduser.css';

function RegisteredUser() {
  const [userData, setUserData] = useState(null);
  const [userRecipes, setUserRecipes] = useState([]);
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token'); // Extract token from URL

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:5000/user', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUserData(response.data.user);
          setUserRecipes(response.data.recipes);
        })
        .catch((err) => console.error('Error fetching user data:', err));
    }
  }, [token]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="registered-user-page">
      <div className="pagename">
        <h1>Welcome, {userData.UserName}</h1>
        <h2>Been active since: {new Date(userData.AccountCreatedOn).toLocaleDateString()}</h2>
        <h2>Number of recipes made: {userRecipes.length}</h2>
      </div>

      <main>
        <section id="recipes">
          <h2>My Recipes</h2>
          <div className="recipes">
            {userRecipes.map((recipe, index) => (
              <div className="recipe" key={index}>
                <div className="recipepic">
                  <img src={`../assets/recipe${index + 1}.jpg`} alt={recipe.recipeName} />
                </div>
                <div className="recipetext">
                  <h3>{recipe.recipeName}</h3>
                  <p>{recipe.description || 'Short description...'}</p>
                  <button className="tab-button">View Recipe</button>
                </div>
              </div>
            ))}
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
