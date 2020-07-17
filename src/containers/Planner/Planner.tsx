import React, { FC, useState } from 'react';
import s from './Planner.module.scss';

import Modal from '../../components/Modal';

import MealPlan from '../MealPlan';
import SearchResults from '../SearchResults';
import RecipeSearchForm from '../RecipeSearchForm';


import {search} from '../../services';
import {Recipe, RequestParams} from '../../services/lib/types';

const Planner:FC = () => {
    const [params, setParams] = useState<RequestParams>({});
    const [query, setQuery] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<Recipe[] | []>([]);
    const [selectedRecipes, setSelectedRecipes] = useState<Recipe[] | []>([]);
    const [showMealPlan, setShowMealPlan] = useState(false);


    const handleSelect = (type:string, e: React.ChangeEvent<HTMLSelectElement>) => {
        e.persist();

        var options = e.target.options;
        var values: string[] = [];

        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }

        setParams(prevParams => ({
            ...prevParams,
            [type]: values,
        }))
    }
    
    const handleSearch = async() => {   
        try {
            const {data} = await search({...params, q:query})

            const recipes = data.hits.map((hit: {recipe: Recipe})=> hit.recipe)

            setRecipes(recipes)
        } catch(error) {
            console.log('error', error)
        }
    }

    const handleAdd = (recipe: Recipe) => {
        setSelectedRecipes(prevSelected => [...prevSelected, recipe])
    }

    const handleRemove = (recipe: Recipe) => {
        const updatedRecipes = selectedRecipes.filter(selectedRecipe => selectedRecipe.uri !== recipe.uri);
        setSelectedRecipes(updatedRecipes);
    }

    const isSelected = (recipe: Recipe) => {
        const result = selectedRecipes.find(selectedRecipe => selectedRecipe.uri === recipe.uri);
        return !!result;
    }


    return (
        <>
            <div>
                <RecipeSearchForm 
                    onSearch={handleSearch}
                    handleSelect={handleSelect}
                    handleQuery={setQuery}
                />
                <SearchResults 
                    recipes={recipes} 
                    isSelected={isSelected} 
                    handleAdd={handleAdd} 
                />
                {selectedRecipes.length > 0 && (
                    <div className={s.fixedBar}>
                        <button 
                            className="u-pull-right" 
                            value="Search" 
                            type="submit" 
                            onClick={() => setShowMealPlan(true)}>
                            View meal plan
                        </button>
                    </div>
                )}
            </div>
            {showMealPlan && 
                <Modal show={setShowMealPlan}>
                    <MealPlan 
                        recipes={selectedRecipes} 
                        onRemove={handleRemove} 
                    />
                </Modal>
            }
        </>
    );
};

export default Planner;
