import React from 'react';
import './main.css';
const ToDoLists=(props)=>
{
    
    return (
        <div>
            <div className="wrong1">
            <button className="wrong">
            <i className="far fa-times-circle" 
            onClick={()=>{
                props.onSelect(props.id);
            }}>
                
            </i>
                </button>
                {props.Items}
            </div>
        </div>
    );
}

export default ToDoLists;