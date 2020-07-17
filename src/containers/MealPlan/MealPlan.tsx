import React, {FC} from 'react';
import {Recipe} from '../../services/lib/types';
import s from './Mealplan.module.scss';

const MealPlan:FC<{recipes: Recipe[], onRemove: Function}> = ({recipes, onRemove}) => {

    return (
        <div>
            <h1>Meal Plan</h1>
            <div data-testid='recipe-container'>
                { recipes && (recipes as any[]).map((recipe, index) => (
                    <div key={recipe.uri} className={s.listItem} data-testid={`item-${index}`}>
                        <h5>{recipe.label}</h5>
                        <div className={s.remove} onClick={() => onRemove(recipe)}>Remove from meal plan</div>
                        <p><strong>Calories:</strong> {recipe.calories.toFixed(2)}</p>
                        <div>
                            <strong>Ingredients:</strong> 
                            <ul>
                                {recipe.ingredientLines.map((ingredientLine: string, index: Number) => <li key={`ingredient-${index}`}>{ingredientLine}</li>)}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPlan;
