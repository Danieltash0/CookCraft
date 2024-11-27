import React from 'react';
import '../styles/recipes.css'; 

function Recipes() {
  return (
    <div className="recipes-page">
      <div className="recipepagename">
        <h1>Multiple Recipes you can choose from</h1>
      </div>
      <h2>Breakfast Snacks</h2>
      <div className="category">
        <div className="recipes-grid">
          <div className="recipe">Recipe 1</div>
          <div className="recipe">Recipe 2</div>
          <div className="recipe">Recipe 3</div>
          <div className="recipe">Recipe 4</div>
        </div>
      </div>
      <h2>Homemade Drinks</h2>
      <div className="category">
        <div className="recipes-grid">
          <div className="recipe">Recipe 1</div>
          <div className="recipe">Recipe 2</div>
          <div className="recipe">Recipe 3</div>
          <div className="recipe">Recipe 4</div>
        </div>
      </div>

      <h2>Family Meals</h2>
      <div className="category">
        <div className="recipes-grid">
          <div className="recipe">Recipe 1</div>
          <div className="recipe">Recipe 2</div>
          <div className="recipe">Recipe 3</div>
          <div className="recipe">Recipe 4</div>
        </div>
      </div>

      <h2>Desserts</h2>
      <div className="category">
        <div className="recipes-grid">
          <div className="recipe">Recipe 1</div>
          <div className="recipe">Recipe 2</div>
          <div className="recipe">Recipe 3</div>
          <div className="recipe">Recipe 4</div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
