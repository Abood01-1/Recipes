// import "./styles.css";
import React from "react";
import "./App.css"
import Recipes from "./components/Recipe"
import Logo from "./components/noun-burger-and-fries-4237642.png"

export default function App() {
  // const APP_KEY = "ac1a3553643bda7d2dd25d9fb2468d90	";
  // const APP_ID = "3ac3b104"
  const [recipes, setRecipes] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("chicken");

  React.useEffect(() => {
    getRecipes();
  }, [query]);

  function getSearch(event) {
    event.preventDefault();
    setQuery(search);
  }
  

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=3ac3b104&app_key=ac1a3553643bda7d2dd25d9fb2468d90`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  //image  calories  label
  let recipesElement = recipes.map((recipe) => (
    <Recipes
      img={recipe.recipe.image}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      mealType={recipe.recipe.mealType[0]}
    />
  ));

  function searchInput(event) {
    setSearch(event.target.value);
  }

  
  
  return (
    <div className="App">
      <div className="heading">
        <h1><img src={Logo} />Food Recipes</h1>
        <form onSubmit={getSearch} className="search-form">
          <div class="input-group mb-3">
            <input 
            onChange={searchInput}
            type="text" 
            className="form-control" 
            placeholder="Search for Recipe" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
          </div>
        </form>
      </div>
      <div className="all-recipes d-flex justify-content-between align-items-center flex-wrap">{recipesElement}</div>
    </div>
  );
}