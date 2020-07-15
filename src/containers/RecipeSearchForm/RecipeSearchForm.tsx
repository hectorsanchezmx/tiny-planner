import React, { FC, useState } from 'react';
import s from './RecipeSearchForm.module.scss';
import Select from '../../components/Select';
import {search} from '../../services';
import {Recipe, RequestParams} from '../../services/lib/types';

const RecipeSearchForm:FC = () => {
    const [params, setParams] = useState<RequestParams>({});
    const [query, setQuery] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<Recipe[] | []>([]);
    const [selectedRecipes, setSelectedRecipes] = useState<Recipe[] | []>([]);


    const handleSelect = (type:string, e: React.ChangeEvent<HTMLSelectElement>) => {
        e.persist();

        var options = e.target.options;
        var values: string[] = [];

        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        console.log('values', values)

        setParams(prevParams => ({
            ...prevParams,
            [type]: values,
        }))
    }
    
    const handleClick = async() => {
        try {
            const {data} = await search({...params, q:query})
            setRecipes(data.hits)
            console.log('data.hits', data.hits)
        } catch(error) {
            
        }
    }

    const handleAdd = (recipe: Recipe) => {
        setSelectedRecipes(prevSelected => [...prevSelected, recipe])
    }

    const isSelected = (recipe: Recipe) => {
        const result = selectedRecipes.find(selectedRecipe => selectedRecipe.uri === recipe.uri);
        return !!result;
    }


    return (
        <div>
            <div className="row">
                    <div className={`u-full-width ${s.boldStyle}`}>
                        Search Recipes
                    </div>
            </div>
            <div className="row">
                <div className="u-full-width">
                    <input type="text" name="q" placeholder="Search" onChange={(e)=>setQuery([e.target.value])}/>
                </div>
            </div>

            <div className="row">
                <div className="three columns">
                    <Select
                        label='Diet'
                        name='diet'
                        options={['balanced', 'high-protein', 'high-fiber', 'low-fat', 'low-carb', 'low-sodium']}
                        onSelect={handleSelect}
                    />
                </div>
                <div className="four columns">
                    <Select
                        label='Dish Type'
                        name='dishType'
                        options={[
                            'Bread', 'Cereals', 'Condiments and sauces', 'Drinks', 'Desserts', 'Main course', 'Pancake', 
                            'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'
                        ]}
                        onSelect={handleSelect}
                    />
                </div>

                <div className="four columns">
                    <Select
                        label='Cuisine Type'
                        name='cui'
                        options={[
                            'American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 
                            'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 
                            'Nordic', 'South American', 'South East Asian'
                        ]}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
            <div className="row">
                <div className="u-full-width">
                    <button className="u-pull-right" value="Search" type="submit" onClick={handleClick}>
                        Search
                    </button>
                </div>
            </div>
            <div className="row">
                <div className={`${s.recipes} u-full-width`}>
                    <h3>Available recipes</h3>
                    { recipes && (recipes as any[]).map(item => (
                        <div className={s.listItem}>
                            {item.recipe.label}
                            <button disabled={isSelected(item.recipe)} className={isSelected(item.recipe) ? `${s.disabled} u-pull-right` : "u-pull-right"} value="Search" type="submit" onClick={() => handleAdd(item.recipe)}>
                                Add to meal plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeSearchForm;
