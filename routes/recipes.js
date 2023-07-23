var express = require("express");
var router = express.Router();
const recipes_utils = require("./utils/recipes_utils");

router.get("/", (req, res) => res.send("im here"));

router.get('/recipesRandom', async (req, res, next) => {
  try {
    recieps = await recipes_utils.getRandomRecipe();
    res.send(recieps);
  } catch (error) {
    next(error);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const recipes = await recipes_utils.getRecipeByName(req.query);
    if (recipes.length == 0) {
      throw { status: 404, message: "There are no recipes with this name" };
    }
    res.send(recipes);
  } catch (error) {
    next(error);
  }
});


/**
 * This path returns a full details of a recipe by its id
 */
router.get("/:recipeId", async (req, res, next) => {
  try {
    const recipe = await recipes_utils.getRecipeDetails(req.params.recipeId);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});




module.exports = router;
