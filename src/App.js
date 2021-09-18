import React, {useState} from "react";
import './App.css';
import './main.css';
import ToDoLists from './ToDoLists';
function App() {

  const[inputList, setInputList]= useState("");
  const[Items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      if(inputList==="")
      {
        alert("Please enter");
        return [...oldItems];
      }
      else{
        return [...oldItems,inputList];
      }
    })
    setInputList("");
  }
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>
      {
        return index!==id;
      })
    })
}
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 class="title"> TO DO List</h1>
        <br></br>
        <input type="text" 
        className="text-box"
        placeholder="Add items" 
        value={inputList}
         onChange={itemEvent}>

        </input>
        <button className="button-submit" onClick={listOfItems}><i class="fas fa-plus"></i></button>
        <br></br>
        <div className="div-list">
          <ul className="list">
            {
              Items.map((itemval,index)=>{
                return <li><ToDoLists
                key={index} 
                id={index} 
                Items={itemval}
                onSelect={deleteItems}
                >
                  </ToDoLists></li>;
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
