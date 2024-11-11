module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add a Recipe</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
<header>
    <div class="logo">
        <a href="/"><img src="/assets/logo1.png" alt="CookCraft Logo"></a>
        <h1>CookCraft</h1>
    </div>
    <div class="menu">
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/createRecipe">Add Recipe</a></li>
                <li><a href="/myrecipes">Recipes</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign-Up</a></li>
            </ul>
        </nav>
    </div>
</header>

<h2>Submit a Recipe</h2>
<form class="recipeForm" action="/submit-recipe" method="POST" enctype="multipart/form-data">
    <label>Recipe Name:</label>
    <input type="text" name="recipe_name" required><br><br>

    <label>Recipe Owner:</label>
    <input type="text" name="recipe_owner" required><br><br>

    <label>Ingredients:</label>
    <textarea name="ingredients" rows="3" required></textarea><br><br>

    <label>Steps To Take:</label>
    <textarea name="recipe_steps" rows="5" required></textarea><br><br>

    <label>Recipe Duration (in minutes):</label>
    <input type="number" name="recipe_duration" min="1" required><br><br>

    <label>Category:</label>
    <select name="category" required>
        <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
        <option value="drinks">Drinks</option>
    </select><br><br>

    <label>Recipe Image:</label>
    <input type="file" name="recipe_image" accept="image/*" required><br><br>

    <label>Created On:</label>
    <input type="date" name="created_on" required><br><br>

    <button type="submit" id="submitButton">Submit Recipe</button>
</form>

<div id="successMessage" style="display: none; color: green;">Recipe successfully added!</div>

<footer>
    <div class="footertext">
        <p>Address: Westlands Tower Building</p>
        <p>P.O Box 341</p>
        <div class="footerline"></div>
        <p>Contact us:</p>
        <ul>
            <li><a href="mailto:cookcraft@gmail.com">cookcraft@gmail.com</a></li>
            <li><a href="tel:+254711561414">+254711561414</a></li>
            <li><a href="tel:+256786286672">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/deliciousrecipes">Instagram</a></li>
        </ul>
    </div>
    <div class="footerpics">
        <img src="/assets/gmail.png" alt="Gmail">
        <img src="/assets/phone.png" alt="Phone">
        <img src="/assets/whatsapp.png" alt="WhatsApp">
        <img src="/assets/instagram.png" alt="Instagram">
    </div>
</footer>
</body>
</html>
`;


