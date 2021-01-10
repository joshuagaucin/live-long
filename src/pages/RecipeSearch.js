import React from "react"
import RecipeSearchService from "../components/recipeStuff/RecipeSearchService"
import Menu from "../components/menu/Menu"
import "../components/recipeStuff/recipeSearch.css"
import { userIsAuthenticated } from "../redux/HOCs";
const RecipeSearch = () => {
  
    return (
      <div>
        <Menu isAuthenticated={userIsAuthenticated} />
        <RecipeSearchService />
      </div>
    );
  
};
export default userIsAuthenticated(RecipeSearch);