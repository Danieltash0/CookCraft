import React from 'react';
import '../styles/registereduser.css'; // Import the relevant CSS file

function RegisteredUser() {
  return (
    <div className="registered-user-page">
      <div className="pagename">
        <h1>Welcome, [User's Name]</h1>
      </div>

      <main>
        <section id="recipes">
          <h2>My Recipes</h2>
          <div className="recipes">
            {/* User's recipes can be listed dynamically here */}
            <div className="recipe">
              <div className="recipepic">
                <img src="../assets/recipe1.jpg" alt="Recipe Example" />
              </div>
              <div className="recipetext">
                <h3>Recipe Name</h3>
                <p>Short description...</p>
                <button className="tab-button">View Recipe</button>
              </div>
            </div>
          </div>
        </section>

        <section id="favourites">
          <h2>Favourites</h2>
          <div className="recipes">
            {/* User's favourite recipes can be listed dynamically here */}
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
