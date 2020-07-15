import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';
import * as firebase from 'firebase/app';
import province from './province.json';
import Test from './Test'
class App extends Component {
    
    constructor(){
    super()
    this.state = {

       FirstName : 'fefe',
       obj : {},
       s : 'c'
 
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

            console.log('bbccc')
            console.log(province.Northern)
            // let N =  Object.entries(this.state.obj).filter(function(province) {
                

            //     province.map((item)=>{
            //             console.log()
            //             if(item.Province !== 'undefined')
            //             return item.Province.find(p => p === province.Northern)
            //         // console.log(item.Province)
            //         // console.log(a)
            //         // var i;
            //         // for (i = 0; i < province.Northern.length; i++) {
            //         //     console.log(province.Northern[i])
            //         // }
                
            //   })
           
                
            // });




            // console.log(this.state.North)    
            // console.log(province.Northern)
            // console.log((this.state.obj))
            // console.log(this.state.s)
            // // const a = Object.entries(this.state.obj)
            // // console.log(a)
            // // console.log(obj)
            // // console.log(snap); 
            // // console.log(this.state.FirstName)    
            // console.log((this.state.obj[2].Rank))
            // console.log(this.state.s)
            // console.log(this.state.FirstName)

            let result = Object.entries(this.state.obj);
            result.map((item, index)=>{
                  console.log('key is:- ', item[0], ' and value is:- ', item[1]); 
            });
               
            


                //   let N =  Object.entries(this.state.obj).filter(function(province) {


                //     province.map((item)=>{
                //             console.log(province.Northern)
                //         // var i;
                //         // for (i = 0; i < province.Northern.length; i++) {
                //         //     console.log(province.Northern[i])
                //         // }
                        
                //   })
               
                    
                // });
                

          
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
                    <Test obj={this.state.obj}/>
                    {Object.keys(this.state.obj).map( (item,i) => <div key={i}>{item}</div>)}
                      {Object.keys(this.state.obj).map( (item,i) => <div key={i}>{item}</div>)
}           
                     {Object.entries(this.state.obj).map(([key, value]) => console.log(`${value.LastName}`))}  
{Object.entries(this.state.obj).map(([key, value]) => <h1 key={value}>{value.FirstName[1]}</h1>)}
                     <h1>fenuifneufnufeffei</h1>

                        {
                                    Object.entries(this.state.obj).map((item)=>{
                                        console.log('key is:- ', item[0], ' and value is:- ', item[1].Image); 
                                        
                                  })
                                    


                        }



{
                                    Object.entries(this.state.obj).map((item)=>

                                    
                                    //   <img src ='https://lh6.googleusercontent.com/hPEFO2DRZliNxfPkDpV-EdfMnM3JB9um5tPlZB_QWAqyT2J0exRM1gdj1gTeqFWjMpQoM5KVpUkEiXDTh-gH=w2880-h1578-rw' alt="Girl in a jacket"/>
                                    <img src ={item[1].Image} alt="Girl in a jacket"/>    
                                  )
                                    


                        }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
