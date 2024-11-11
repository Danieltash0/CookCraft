// home.js
module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="/styles.css">
    <script src="/recipe.js"></script>
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

    <div class="pagename">
        <h1>Delicious Starts Here</h1>
    </div>

    <div class="first">
        <h2>"Your Ultimate Recipe Hub, Where Every Dish Tells a Story!"</h2>
        <h2>Write Your Story Now</h2>
        <p><a href="/signup" class="button">Create a Recipe</a></p>
    </div>

    <div class="content">
        <h2>Recipe Categories</h2>
        <div class="categories">
            <div class="category">
                <div class="categorypic"><img src="/assets/breakfast.jpg" alt="Category 1"></div>
                <div class="categorytext"><p>Breakfast Snacks</p></div>
            </div>
            <div class="category">
                <div class="categorytext"><p>Family Meals</p></div>
                <div class="categorypic"><img src="/assets/lunch.jpg" alt="Category 2"></div>
            </div>
            <div class="category">
                <div class="categorypic"><img src="/assets/drinks.jpg" alt="Category 3"></div>
                <div class="categorytext"><p>Homemade Drinks</p></div>
            </div>
            <div class="category">
                <div class="categorytext"><p>Desserts</p></div>
                <div class="categorypic"><img src="/assets/desserts.jpg" alt="Category 4"></div>
            </div>
        </div>

        <h2>Some Recipes You Might Be Interested In</h2>
        <div class="recipes">
            <!-- Recipe items go here -->
            <div class="recipe">
                <div class="recipepic"><img src="/assets/catpic.jpg" alt="Recipe 1"></div>
                <div class="recipetext">
                    <button class="tab-button">View Recipe</button>
                    <div class="tab-content">
                        <div class="tab" id="tab-1">
                            <h2>Recipe Name</h2>
                            <p>Content like ingredients, procedure, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Repeat for other recipes as needed -->
        </div>
    </div>

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
