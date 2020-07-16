import React from 'react';
import Planner from './containers/Planner';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="u-full-width">
                    <header className="App-header">Surely Meal Planner</header>
                </div>
            </div>
            <Planner />
        </div>
    );
}

export default App;
