import React, {FC} from 'react';
import {Recipe} from '../../services/lib/types';
import s from './Mealplan.module.scss';

const MealPlan:FC<{recipes: Recipe[], onRemove: Function}> = ({recipes, onRemove}) => {

    return (
        <div>
            <h1>Meal Plan</h1>
            { recipes && (recipes as any[]).map(recipe => (
                <div className={s.listItem}>
                    <h5>{recipe.label}</h5>
                    <div className={s.remove} onClick={() => onRemove(recipe)}>Remove from meal plan</div>
                    <p><strong>Calories:</strong> {recipe.calories.toFixed(2)}</p>
                    <p>
                        <strong>Ingredients:</strong> 
                        <ul>
                            {recipe.ingredientLines.map((ingredientLine: string) => <li>{ingredientLine}</li>)}
                        </ul>
                    </p>

                </div>
            ))}
        </div>
    );
};

export default MealPlan;
