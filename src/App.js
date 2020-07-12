import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';
import * as firebase from 'firebase/app';

class App extends Component {
    
    constructor(){
    super()
    this.state = {

       FirstName : 'fefe',
       obj : {},
       s : 'c',
       

    }
    }
        
    componentDidMount() {

            const rootRef = firebase.database().ref('Mastersheet')
            // console.log(rootRef)
         
            const nameRef = rootRef.child('FirstName')
            // console.log(nameRef)
            rootRef.on('value', (snap) => {
                console.log(snap.val())
                // alert(snap.val())
              
                this.setState({

                obj : snap.val(),
                s : 'z',
                FirstName : 'zzzzzz'
            
    
            })





            console.log((this.state.obj))
            console.log(this.state.s)
            // const a = Object.entries(this.state.obj)
            // console.log(a)
            // console.log(obj)
            // console.log(snap); 
            // console.log(this.state.FirstName)    
            console.log((this.state.obj[2].Rank))
            console.log(this.state.s)
            console.log(this.state.FirstName)

            let result = Object.entries(this.state.obj);
            result.map((item, index)=>{
                  console.log('key is:- ', item[0], ' and value is:- ', item[1]); 
            });
                console.log("result" + result)
              
        
          
            });
           
        console.log(this.state.obj)
        console.log(this.state.s)
        console.log(this.state.FirstName)
    }


    render(){
        return (
            <BrowserRouter>
                <div>
                    <Pages />
                    {Object.keys(this.state.obj).map( (item,i) => <div key={i}>{item}</div>)}
                      {Object.keys(this.state.obj).map( (item,i) => <div key={i}>{item}</div>)
}           
                     {Object.entries(this.state.obj).map(([key, value]) => console.log(`${value.LastName}`))}  
{Object.entries(this.state.obj).map(([key, value]) => <h1 key={value}>{value.FirstName[1]}</h1>)}
                     <h1>fenuifneufnui</h1>

                        {
                                    Object.entries(this.state.obj).map((item)=>{
                                        console.log('key is:- ', item[0], ' and value is:- ', item[1].Building); 
                                  })
                                    


                        }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
