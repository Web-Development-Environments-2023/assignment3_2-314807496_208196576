CREATE TABLE FavoriteRecipes (
    user_id INT,
    recipe_id INT
)

CREATE TABLE FamilyRecipes (
    user_id INT,
    recipe_id INT
)

CREATE TABLE MyRecipes (
    user_id INT,
    recipe_id INT
)

CREATE TABLE users (
    username VARCHAR(30),
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    country VARCHAR(30),
    hash_password VARCHAR(30),
    email VARCHAR(30)

)
