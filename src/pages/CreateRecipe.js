import React, { useState } from "react";
import "../styles/createrecipe.css";

const CreateRecipe = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setSuccess(true); // Display success message
    // Add your form submission logic here, e.g., send data to API
  };

  return (
    <div className="create-recipe-container">
      <h2>Submit a Recipe</h2>
      <form
        className="recipeForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Recipe Name:</label>
        <input type="text" name="recipe_name" required />
        <br />
        <br />

        <label>Recipe Owner:</label>
        <input type="text" name="recipe_owner" required />
        <br />
        <br />

        <label>Ingredients:</label>
        <textarea name="ingredients" rows="3" required></textarea>
        <br />
        <br />

        <label>Steps To Take:</label>
        <textarea name="recipe_steps" rows="5" required></textarea>
        <br />
        <br />

        <label>Recipe Duration (in minutes):</label>
        <input type="number" name="recipe_duration" min="1" required />
        <br />
        <br />

        <label>Category:</label>
        <select name="category" required>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
          <option value="drinks">Drinks</option>
        </select>
        <br />
        <br />

        <label>Recipe Image:</label>
        <input type="file" name="recipe_image" accept="image/*" required />
        <br />
        <br />

        <label>Created On:</label>
        <input type="date" name="created_on" required />
        <br />
        <br />

        <button type="submit" id="submitButton">
          Submit Recipe
        </button>
      </form>

      {success && (
        <div id="successMessage" style={{ color: "green" }}>
          Recipe successfully added!
        </div>
      )}
    </div>
  );
};

export default CreateRecipe;
