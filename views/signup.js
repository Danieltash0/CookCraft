<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="../styles/signup.css">
</head>
<body>
    <header>
        
            <div class="logo">
              <a href="home.html"><img src="../assets/logo1.png" alt="CookCraft Logo"></a>
              <h1>CookCraft</h1>
            </div>
            
            <div class="menu">
        <nav>
            <ul>
              <li><a href="home.html">Home</a></li>
              <li><a href="createRecipe.html">Add Recipe</a></li>
              <li><a href="myrecipes.html">Recipes</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="signup.html">Sign-Up</a></li>
            </ul>
        </nav>
        </div>
          
    </header>
    <div class="pagename">
      <h1>Register and Create Your Own Recipes</h1>
    </div>

    <div class="content">
        <h1>Create a CookCraft Account</h1>
        <form id="signup-form">
            <label for="username">Create Username:</label>
            <input type="text" id="username" name="username" required>
        
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required>
            <button type="submit">Sign Up</button>
            <p>Already have an account with us? <a href="Login.html">Login</a></p>
        </form>
    </div>

    <footer>
        <div class="footertext">
          <p>Address: Westlands tower building</p>
          <p>P.O Box 341</p>
          <div class="footerline"></div>
          <p>Contact us:</p>
          <ul>
            <li><a href="danieltasho11@gmail.com">cookcraft@gmail.com</a></li>
            <li><a href="tel:+254711561414">+254711561414</a></li>
            <li><a href="tel:+256786286672" >WhatsApp</a></li>
            <li><a href="https://www.instagram.com/deliciousrecipes">Instagram</a></li>
          </ul>
        </div>
        <div class="footerpics">
          <img src="../assets/gmail.png" alt="Gmail"> 
          <img src="../assets/phone.png" alt="Phone"> 
          <img src="../assets/whatsapp.png" alt="WhatsApp"> 
          <img src="../assets/instagram.png" alt="Instagram"> 
        </div>
      </footer>
</body>
</html>