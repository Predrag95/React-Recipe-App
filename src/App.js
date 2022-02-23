import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css'

const App = () => {

  const APP_ID = '4c9c18cf';
  const APP_KEY = 'd111741e586f6ae652897048a9cc2210';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  const formatedApi = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  };

  useEffect(() => {
    formatedApi();
  }, [query]);


  return (
    <div className="form-container">
      <form className="form" onSubmit={getSearch}>
        <input type="search" className="search-box" value={search} onChange={updateSearch} />
        <input type="submit" className="submit" />
      </form>
      <div className="all-recipes"> 
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          />
          ))}
      </div>
    </div>
  )
};

export default App;