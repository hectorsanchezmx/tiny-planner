import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'

import SearchResults from './SearchResults';

describe('SearchResults Container', () => {
    const recipes = [
        {
            recipe: {
                uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_4bb99424e1bbc40d3cd1d891883d6745',
                label: 'Frothy Iced Matcha Green Tea Recipe',
                image: 'https://www.edamam.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg',
                source: 'Serious Eats',
                url: 'http://www.seriouseats.com/recipes/2016/08/iced-matcha-green-tea-recipe.html',
                shareAs: 'http://www.edamam.com/recipe/frothy-iced-matcha-green-tea-recipe-4bb99424e1bbc40d3cd1d891883d6745/-/low-fat',
                yield: 2,
                dietLabels: [
                  'High-Protein',
                  'Low-Fat'
                ],
                healthLabels: [
                  'Sugar-Conscious',
                  'Vegan',
                  'Vegetarian',
                  'Peanut-Free',
                  'Tree-Nut-Free',
                  'Alcohol-Free'
                ],
                cautions: [
                  'Sulfites'
                ],
                ingredientLines: [
                  '2 teaspoons (6g) Japanese matcha green tea (see note above)',
                  '8 ounces (235ml) cold water'
                ],
                ingredients: [
                  {
                    text: '2 teaspoons (6g) Japanese matcha green tea (see note above)',
                    weight: 6,
                    image: null
                  },
                  {
                    text: '8 ounces (235ml) cold water',
                    weight: 226.796185,
                    image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
                  }
                ],
                calories: 0.06,
                totalWeight: 232.796185,
                totalTime: 2,
                totalNutrients: {
                  ENERC_KCAL: {
                    label: 'Energy',
                    quantity: 0.06,
                    unit: 'kcal'
                  },
                },
                totalDaily: {
                  ENERC_KCAL: {
                    label: 'Energy',
                    quantity: 0.003,
                    unit: '%'
                  },
                },
              }
        }
      ]

    const props = {
        recipes: recipes,
        isSelected: () => true,
        handleAdd: () => {}
    }
    it('should render results', () => {
        const { getByTestId } = render(<SearchResults {...props} />);
        const element = getByTestId(recipes[0].uri)
        expect(element).toBeInTheDocument();
    });
});
