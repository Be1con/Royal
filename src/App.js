import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
        );
    }
}

export default App;
