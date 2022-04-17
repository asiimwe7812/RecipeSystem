import React from "react";
import styles from "./recipe.module.css";
const Recipe = ({ Title, carolies, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h1>{Title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{carolies}</p>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;
