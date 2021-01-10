import Axios from "axios";
import React,{useState} from "react";
import {v4 as uuidv4} from "uuid"
import "./recipeSearch.css"
import Recipe from "./Recipe"

const RecipeSearchService = () => {
 
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([]);
    const apiId = "b26e3655";
  const apiKey = "4f8d80eb702355068be0f0bd681411d3";
const url =`https://api.edamam.com/search?
q=${query}&app_id=${apiId}&app_key=${apiKey}`

 const getData = async()=> {
     const response = await Axios.get(url)
     setRecipes(response.data.hits)
    console.log(response);
    setQuery("");
 };

 const onChange = (e)=>{
     setQuery(e.target.value);
 };
 const onSubmit = e => {
    e.preventDefault();
    getData();
 };
    return (
      <div className="recipeSearcher">
        <h1>Find a Recipe!</h1>
        <h2>Simply type a name of a dish you would like to create!</h2>
        <form className="search-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search Food"
            autoComplete="off"
            onChange={onChange}
          />
          <input type="submit" value="search" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4
            ()} recipe={recipe} />)}
        </div>
      </div>
    );
  }


export default RecipeSearchService;
