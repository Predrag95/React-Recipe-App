import React from "react";

const Recipe = ({ title, image, ingredients, calories }) => {
  return (
    <div className='recipe-card'>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
          ))}
      </ol>
      <p>{calories}</p>
    </div>
  )
};

export default Recipe;