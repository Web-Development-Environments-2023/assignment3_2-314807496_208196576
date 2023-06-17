CREATE TABLE FavoriteRecipes (
    user_id INT,
    recipe_id INT
)

CREATE TABLE FamilyRecipes (
    user_id INT,
    recipe_id INT
)

CREATE TABLE MyRecipes (
    user_id VARCHAR(100),
    recipe_id INT,
    title VARCHAR(100),
    readyInMinutes VARCHAR(100),
    urlImage VARCHAR(100),
    aggregateLikes INT,
    vegan VARCHAR(100),
    vegetarian VARCHAR(100), 
    glutenFree VARCHAR(100)
)

CREATE TABLE users (
    username VARCHAR(100),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    country VARCHAR(100),
    hash_password VARCHAR(100),
    email VARCHAR(100)

)