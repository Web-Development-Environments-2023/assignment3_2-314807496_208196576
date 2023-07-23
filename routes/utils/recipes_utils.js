const axios = require("axios");
const api_domain = "https://api.spoonacular.com/recipes";



/**
 * Get recipes list from spooncular response and extract the relevant recipe data for preview
 * @param {*} recipes_info 
 */


async function getRecipeInformation(recipe_id) {
    return await axios.get(`${api_domain}/${recipe_id}/information`, {
        params: {
            includeNutrition: false,
            apiKey: process.env.spooncular_apiKey
        }
    });
}



async function getRecipeDetails(recipe_id) {
    let recipe_info = await getRecipeInformation(recipe_id);
    let { id, title, readyInMinutes, image, aggregateLikes, vegan, vegetarian, glutenFree, analyzedInstructions, instructions, extendedIngredients  } = recipe_info.data;

    return {
        id: id,
        title: title,
        readyInMinutes: readyInMinutes,
        image: image,
        aggregateLikes: aggregateLikes,
        vegan: vegan,
        vegetarian: vegetarian,
        glutenFree: glutenFree,
        analyzedInstructions: analyzedInstructions,
        instructions: instructions,
        extendedIngredients : extendedIngredients
    }
}

async function getRandomRecipe(){
    let recieps =  await axios.get(`https://api.spoonacular.com/recipes/random?number=3`, {
        params: {
            includeNutrition: false,
            apiKey: process.env.spooncular_apiKey
        }
    });
    let recipes_data = recieps.data;
    let recieps_as_array = recipes_data.recipes.map(item => {
        return {
            id: item.id,
            title: item.title,
            readyInMinutes: item.readyInMinutes,
            image: item.image,
            aggregateLikes: item.aggregateLikes,
            vegan: item.vegan,
            vegetarian: item.vegetarian,
            glutenFree: item.glutenFree
        }
    });
    return recieps_as_array;
}

async function getRecipeByName(query, user_id) {
    let { name,id,readyInMinutes,vegan,vegetarian,glutenFree } = query;
    let diet = "" 
    if(vegan){
        diet += "Vegan,"
    }
    if(vegetarian){
        diet += "Vegetarian,"
    }
    if(glutenFree){
        diet += "Gluten Free"
    }
    let recipes = await axios.get(`${api_domain}/complexSearch`, {
      params: {
        titleMatch: name,
        diet: diet,
        readyInMinutes: readyInMinutes,
        number: 5,
        apiKey: process.env.spooncular_apiKey        
      },
    });
    let recipes_data = recipes.data;
    let recieps_as_array = recipes_data.results.map(item => {
        return {
            id: item.id,
            title: item.title,
            image: item.image,
        }
    });
    return recieps_as_array;
  }

  async function getRecipesPreview(recipe_ids){
    const reciepes = []
    for(let i=0; i<recipe_ids.length;i++){
        let recipe = await getRecipeDetails(recipe_ids[i])
        reciepes.push(recipe)
    }
    return reciepes;
  }





exports.getRecipeDetails = getRecipeDetails;
exports.getRandomRecipe = getRandomRecipe;
exports.getRecipeByName = getRecipeByName;
exports.getRecipesPreview = getRecipesPreview;

