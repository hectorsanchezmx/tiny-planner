import React, { FC, MouseEvent } from 'react';
import s from './RecipeSearchForm.module.scss';

import Select from '../../components/Select';

type RecipeSearchFormProps = {
    handleQuery: Function;
    handleSelect: Function;
    onSearch: ((event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void) | undefined
}

const RecipeSearchForm: FC<RecipeSearchFormProps>= ({handleQuery, handleSelect, onSearch}) => {

    return (
        <div>
            <div className="row">
                    <div className={`u-full-width ${s.boldStyle}`}>
                        Search Recipes
                    </div>
            </div>
            <div className="row">
                <div className="u-full-width">
                    <input type="text" name="q" placeholder="Search" onChange={(e)=>handleQuery([e.target.value])}/>
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
                    <button className="u-pull-right" value="Search" type="submit" onClick={onSearch}>
                        Search
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default RecipeSearchForm;
