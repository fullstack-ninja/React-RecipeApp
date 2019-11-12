import React from 'react';
import './App.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="card">
            <h1 className="title">{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li className="list">{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="title" className="img"/>
        </div>
    );
}

export default Recipe;