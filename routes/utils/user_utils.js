const DButils = require("./DButils");

async function markAsFavorite(user_id, recipe_id){
    await DButils.execQuery(`insert into FavoriteRecipes values ('${user_id}',${recipe_id})`);
}

async function getFavoriteRecipes(user_id){
    const recipes_id = await DButils.execQuery(`select recipe_id from FavoriteRecipes where user_id='${user_id}'`);
    return recipes_id;
}

async function getFamliyRecipes(user_id){
    const recipes_id = await DButils.execQuery(`select recipe_id from FamilyRecipes where user_id='${user_id}'`);
    return recipes_id;
}

async function markAsFamily(user_id, recipe_id){
    await DButils.execQuery(`insert into FamilyRecipes values ('${user_id}',${recipe_id})`);
}

async function getMyRecipes(user_id){
    const data = await DButils.execQuery(`select recipe_id, title, readyInMinutes, urlImage, aggregateLikes, vegan, vegetarian, glutenFree from MyRecipes where user_id='${user_id}'`);
    return data;
}
async function addRecipe(user_id, id, title, readyInMinutes, image, aggregateLikes, vegan, vegetarian, glutenFree ){
    await DButils.execQuery(`insert into MyRecipes values ('${user_id}',${id},${title},${readyInMinutes},${image},${aggregateLikes},${vegan},${vegetarian},${glutenFree})`);
}


exports.markAsFavorite = markAsFavorite;
exports.getFavoriteRecipes = getFavoriteRecipes;
exports.getFamliyRecipes = getFamliyRecipes;
exports.markAsFamily = markAsFamily;
exports.getMyRecipes = getMyRecipes;
exports.addRecipe = addRecipe;