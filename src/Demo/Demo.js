import React from 'react';
import {useReducer}  from 'react' 

const Demo = () => {
    
    const initialState = 0
    const reducer = (states,action)=>{
        switch(action){

            case 'increment':
                return states + 1;

            case 'decrement':
                return states -1;


            default : return states
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <div> <h5>count {count}</h5></div>
            <button style={{paddgin:'10px',margin:'5px'}} onClick={()=>dispatch('increment')}>Decriment</button>
            <button style={{paddgin:'10px',margin:'5px'}} onClick={()=>dispatch('decrement')}>Incriment</button>
        </div>
    );
};

export default Demo;