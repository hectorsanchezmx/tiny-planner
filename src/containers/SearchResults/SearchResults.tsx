import React, { FC, useState } from 'react';
import s from './SearchResults.module.scss';

import {Recipe} from '../../services/lib/types';

type SearchResultsProps = {
    recipes: Recipe[],
    isSelected: Function,
    handleAdd: Function
}

const SearchResults:FC<SearchResultsProps> = ({recipes, isSelected, handleAdd}) => {

    return (
        <div className="row">
            <div className={`${s.recipes} u-full-width`}>
                <h3>Available recipes</h3>
                { recipes && (recipes as any[]).map(item => (
                    <div key={item.recipe.uri} className={s.listItem}>
                        {item.recipe.label}
                        <button disabled={isSelected(item.recipe)} className={isSelected(item.recipe) ? `${s.disabled} u-pull-right` : "u-pull-right"} value="Search" type="submit" onClick={() => handleAdd(item.recipe)}>
                            Add to meal plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
