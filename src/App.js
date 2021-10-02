import React, { useState } from "react";
import axios from "axios";
import './App.css';
import './main.css';
import ToDoLists from './ToDoLists';

const baseURL = "http://localhost:8080/staerter/mvc";

function App() {

  const[inputList, setInputList]= useState("");
  const[Items,setItems]=useState([]);//Array Items[Index 0-Text and Index 1-Rnadom number{ID}]

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      if(inputList==="")
      {
        alert("Please enter");
        console.log(oldItems + "vals")
        return [...oldItems];
      }
      else {
        const randm = Math.floor(Math.random() * 10000000) + 1
        console.log(inputList + " " + randm)
        console.log(typeof (randm))
        let postdata = new URLSearchParams();
        postdata.append("idNo", randm)
        postdata.append("msg",inputList)
        axios.post(baseURL + "/todoAdd",postdata).then((response) => {
          console.log("Success")
        });
        return [...oldItems, [inputList,randm]]//Text and id puahed to array
        
      }
    })
    // console.log(Items);
    setInputList("");
  }
  const deleteItems=(id)=>{
    console.log(Items);
    setItems((oldItems)=>{
      return oldItems.filter((index)=>
      {
        return index[1]!==id;//Text is deleted
      })
    })
}
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className="title"> TO-DO List</h1>
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
                id={itemval[1]} 
                Items={itemval[0]}
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
