import React, { Component } from 'react';

class Test extends Component {

   
    
    render() {
        {console.log("tteswe")}
        return(
            <div>
       {Object.entries(this.props.obj).map(([key, value]) => <h1 key={value}>{value.FirstName[1]}</h1>)}
            </div>
        );
    }
}

export default Test;