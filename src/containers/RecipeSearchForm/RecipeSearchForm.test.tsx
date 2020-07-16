import React from 'react';
import { render } from '@testing-library/react';
import RecipeSearchForm from './RecipeSearchForm';

describe('RecipeSearchForm Container', () => {
    const props = {
        handleQuery: () => {}, 
        handleSelect: () => {}, 
        onSearch: () => {}
    }
    it('should render query search element', () => {
        const { getByPlaceholderText } = render(<RecipeSearchForm {...props} />);
        const input = getByPlaceholderText('Search');
        expect(input).toBeInTheDocument();
    });
    it('should render diet multi select', () => {
        const { getByLabelText } = render(<RecipeSearchForm {...props} />);
        const select = getByLabelText('Diet');
        expect(select).toBeInTheDocument();
        expect(select).toHaveAttribute('multiple');
    });

    it('should render cuisine multi select', () => {
        const { getByLabelText } = render(<RecipeSearchForm {...props} />);
        const select = getByLabelText('Cuisine Type');
        expect(select).toBeInTheDocument();
        expect(select).toHaveAttribute('multiple');
    });

    it('should render dish type multi select', () => {
        const { getByLabelText } = render(<RecipeSearchForm {...props} />);
        const select = getByLabelText('Dish Type');
        expect(select).toBeInTheDocument();
        expect(select).toHaveAttribute('multiple');
    });
});
