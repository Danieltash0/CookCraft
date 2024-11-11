
module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
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

    <div class="pagename">
        <h1>Add another recipe to your collection</h1>
    </div>

    <div class="content">
        <h1>Welcome Back!</h1>
        <form id="signup-form" action="/login" method="POST">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
            <p>Don't have a CookCraft account yet? <a href="/signup">Sign Up Here</a></p>
        </form>
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
