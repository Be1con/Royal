import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'materialize-css';
import Pages from './Pages/Pages';

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Pages />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
