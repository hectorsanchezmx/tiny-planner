import React from 'react';
import {RecipeSearchForm} from './containers/RecipeSearchForm';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="u-full-width">
                    <header className="App-header">Surely Meal Planner</header>
                </div>
            </div>
            <RecipeSearchForm />
        </div>
    );
}

export default App;
