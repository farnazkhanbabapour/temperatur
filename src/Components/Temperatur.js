import React, { Component } from 'react';
import BackgroundColor from './BackgroundColor';

class Temperatur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperatur: 10,

        }
    }
    addDegreeHandler () {
        this.setState((prevstate)=>{
            return{ temperatur: prevstate.temperatur + 1};

        })

    }

    lowDegreeHandler (){
        this.setState((prevstate)=>{
            return { temperatur: prevstate.temperatur -1};

        })

    }
    render() { 
        const x = this.state.temperatur > 15 ? <button style={{backgroundColor:"blue",textAlign:"center"}} > {this.state.temperatur} degree </button> :
         <button style={{backgroundColor:"red",textAlign:"center"}}>{this.state.temperatur} degree  </button>
       
        return ( 
            <div style={{textAlign:"center"}}>
                
                <div >
                   {x}
                </div>
                <button onClick={()=>{this.addDegreeHandler()}}>+</button>
                <button onClick={()=>{this.lowDegreeHandler()}}>-</button>
            </div>
         );
    }
}
 
export default Temperatur;