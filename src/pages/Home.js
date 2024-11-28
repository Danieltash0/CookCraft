import React from "react";
import "../styles/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">

      <div className="pagename">
        <h1>Delicious Starts Here</h1>
      </div>
        
      <div className="first">
        <h2>"Your Ultimate Recipe Hub, Where Every Dish Tells a Story!"</h2>
        <h2>Write Your Story Now</h2>
        <p><Link to="/create-recipe" className="button">Create a Recipe</Link></p>
      </div>

      <div className="home-content">
        <h2>Recipe Categories</h2>
        <div className="categories">
          <div className="category">
            <div className="categorypic">
              <img src="../assets/breakfast.jpg" alt="Category 1" />
            </div>
            <div className="categorytext">
              <p>BreakFast snacks</p>
            </div>
          </div>
          <div className="category">
            <div className="categorytext">
              <p>Family Meals</p>
            </div>
            <div className="categorypic">
              <img src="../assets/lunch.jpg" alt="Category 2" />
            </div>
          </div>
          <div className="category">
            <div className="categorypic">
              <img src="../assets/drinks.jpg" alt="Category 3" />
            </div>
            <div className="categorytext">
              <p>HomeMade Drinks</p>
            </div>
          </div>
          <div className="category">
            <div className="categorytext">
              <p>Desserts</p>
            </div>
            <div className="categorypic">
              <img src="../assets/desserts.jpg" alt="Category 4" />
            </div>
          </div>
        </div>

        <h2>Some recipes you might be interested in</h2>

        <div className="recipes">
          
          {[...Array(8)].map((_, index) => (
            <div className="recipe" key={index}>
              <div className="recipepic">
                <img src={`../assets/recipe${index + 1}.jpg`} alt={`Recipe ${index + 1}`} />
              </div>
              <div className="recipetext">
                <button className="tab-button">View Recipe</button>
                <div className="tab-content">
                  <div className="tab" id="tab-1">
                    <h2>Recipe Name</h2>
                    <p>Content Like Ingredients, Procedure etc.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
