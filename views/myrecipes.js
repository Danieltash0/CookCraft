
module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe List</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Recipe List</h2>
    <table id="recipeTable">
        <thead>
            <tr>
                <th>Recipe ID</th>
                <th>Recipe Name</th>
                <th>Recipe Owner</th>
                <th>Ingredients</th>
                <th>Recipe Steps</th>
                <th>Duration (min)</th>
                <th>Category</th>
                <th>Created On</th>
            </tr>
        </thead>
        <tbody>
            <!-- Recipe rows will be populated here -->
        </tbody>
    </table>

    <script>
        fetch('/recipes')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#recipeTable tbody');
                data.forEach(recipe => {
                    const row = document.createElement('tr');
                    row.innerHTML = \`
                        <td>\${recipe.recipe_ID}</td>
                        <td>\${recipe.recipe_name}</td>
                        <td>\${recipe.recipe_owner}</td>
                        <td>\${recipe.ingredients}</td>
                        <td>\${recipe.recipe_steps}</td>
                        <td>\${recipe.recipe_duration}</td>
                        <td>\${recipe.category}</td>
                        <td>\${recipe.created_on}</td>
                    \`;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    </script>
</body>
</html>
`;
