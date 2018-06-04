import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDr5wkkDN40HbwOy63tPuQhnmDbUYv54q8';

// Create a new component. This component should produce some HTML

const App = function(){
    return (
        <div>
            <SearchBar />
        </div>
    )
}


// Take this components generated HTML 
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));