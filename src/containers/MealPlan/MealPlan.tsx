import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import Select from '../../components/Select';
import {search} from '../../services';
import {Recipe, RequestParams} from '../../services/lib/types';
import s from './Mealplan.module.scss';

const RecipeSearchForm:FC<{recipes: Recipe[], onRemove: Function, show: Dispatch<SetStateAction<boolean>>}> = ({recipes, onRemove, show}) => {

    return (
        <div className={s.container}>
            <div className={s.close} onClick={() => show(false)}>x</div>
            <div className={s.mealPlan}>
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
        </div>
    );
};

export default RecipeSearchForm;
