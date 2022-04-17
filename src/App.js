import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';


const App = () => {
  const APP_ID = "a2c273b1";
  const APP_KEY = "20305f39b43b339dfb229355cf67053e	";
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();

  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipe(data.hits);

  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <h1>Ivan RecipeApp</h1>
  

      <form onSubmit={getSearch} className='search-form'>
        < input className='search-bar' value={search} type="text" onChange={(e) => setSearch(e.target.value)} />
        <button className='search-button' type='submit'>
          search
        </button>


      </form>

      <div className='recipe'>
        {recipes.map(recipe => (<Recipe key={recipe.recipe.label} Title={recipe.recipe.label} carolies={recipe.recipe.carolies}
          image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />))}
      </div>

    </div>

  );



};



export default App;
