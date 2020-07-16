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
                    <li key={item.uri} className={s.listItem} data-testid={item.uri}>
                        {item.label}
                        <button disabled={isSelected(item)} className={isSelected(item) ? `${s.disabled} u-pull-right` : "u-pull-right"} value="Search" type="submit" onClick={() => handleAdd(item)}>
                            Add to meal plan
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
