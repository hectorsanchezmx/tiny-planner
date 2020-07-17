import React from 'react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import axios from 'axios';
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import * as config from '../../config';

import {DietLabel, HealthLabel, Recipe} from '../../services/lib/types';
import Planner from './Planner';

window.MutationObserver = require("mutation-observer");

describe('SearchResults Container', () => {

    it('should search for Reciipes, add to Meal Plan, View Meal Plan and delete recipes from Mela Plan ', async() => {

        const { getByText, getByLabelText, getAllByText} = render(<Planner />);

        // Should render search results
        fireEvent.change(getByLabelText(/Diet/i), { target: { value: 'low-fat' } })
        fireEvent.click(getByText('Search'));
        
        // When at least one recipe is added, a View meal plan button should render
        await waitFor(()=> getAllByText('Add to meal plan'));
        const addButtons = getAllByText('Add to meal plan')

        fireEvent.click(addButtons[0]);
        expect(getByText('View meal plan')).toBeInTheDocument();

        // When View meal plan is clicked, the meal plan should get rendered
        fireEvent.click(getByText('View meal plan'));
        await waitFor(()=> expect(screen.getByText('Meal Plan')).toBeInTheDocument());

        // When Remove from Meal Plan is clicked, the meal plan should get rendered
        fireEvent.click(getByText('Remove from meal plan'));
        const container = screen.getByTestId('recipe-container')
        await waitFor(()=>expect(container).toBeEmptyDOMElement());
    });
});