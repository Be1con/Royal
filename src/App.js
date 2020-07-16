import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';
import * as firebase from 'firebase/app';

class App extends Component {
    constructor(){
        super()
        this.state = {
           obj : {}
        }
    }
    
    componentDidMount() {
        const rootRef = firebase.database().ref('Mastersheet')
          
        rootRef.on('value', (snap) => {
            console.log(snap.val())
            this.setState({
                obj : snap.val() 
            })
        });
    }
  
    render(){
        return (
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
        );
    }
}

export default App;
