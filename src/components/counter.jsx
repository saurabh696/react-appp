import React, { Component } from 'react';

class Counter extends Component {
    state={
        imageUrl: 'https://picsum.photos/400'
};
  
    render() {
        const mystyle = {
            backgroundColor: "aliceblue",
            border: "solid 1px",
            position: "absolute",
            right: "10px"

        };
        return (
            <div>
                <h1 style={mystyle}>ISOMORPHIC REACT APP</h1>
                <img style={{width:"100%"}} src={this.state.imageUrl} />
            </div>

        );
        }
    }
    
    
    
    export default Counter;
