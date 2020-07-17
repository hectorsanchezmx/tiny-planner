import React from 'react';
import { render, fireEvent, getAllByText, waitFor, screen } from '@testing-library/react';
import {DietLabel, HealthLabel, Recipe} from '../../services/lib/types';
import MealPlan from './MealPlan';

window.MutationObserver = require("mutation-observer");

describe('SearchResults Container', () => {
    let recipes: Recipe[] = [{
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_4bb99424e1bbc40d3cd1d891883d6745',
        label: 'Frothy Iced Matcha Green Tea Recipe',
        image: 'https://www.edamam.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg',
        source: 'Serious Eats',
        url: 'http://www.seriouseats.com/recipes/2016/08/iced-matcha-green-tea-recipe.html',
        yield: 2,
        dietLabels: [
            DietLabel.HighProtein,
            DietLabel.LowFat,
        ],
        ingredientLines: [
            '2 teaspoons (6g) Japanese matcha green tea (see note above)',
            '8 ounces (235ml) cold water'
        ],
        healthLabels: [
            HealthLabel.Vegan,
            HealthLabel.Vegetarian,
            HealthLabel.PeanutFree,
            HealthLabel.TreeNutFree,
        ],
        ingredients: [
            {
            foodId: '1',
            quantity: 1,
            measure: {
                uri: '/',
                label: 'testMeasure',
            },
            weight: 1,
            food: {
                uri: '/',
                label: 'tstFood',
            }
            },
        ],
        calories: 0.06,
        totalWeight: 232.796185,
        totalNutrients: [{
            uri: '',
            label: 'Energy',
            quantity: 0.06,
            unit: 'kcal'
        }],
        totalDaily: [{
            uri: '',
            label: 'Energy',
            quantity: 0.06,
            unit: 'kcal'
        }],
    }]

    const props = {
        recipes: recipes,
        onRemove: (recipe: Recipe) => {
            recipes = recipes.filter(selectedRecipe => selectedRecipe.uri !== recipe.uri);
        },
    }

    it('should show selected recipes in Meal Plan', () => {
        const { getByTestId, getByText } = render(<MealPlan {...props} />);

        const element = getByTestId('item-0')
        expect(element).toBeInTheDocument();
    });
});