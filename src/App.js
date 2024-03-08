import React,{useState} from 'react';
import TodoLists from  "./TodoLists";
const App = () =>{
  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]);
  const itemEvent = (event) =>{
  setInputList(event.target.value);
  };
  const listofItems = () =>{
   setItems((oldItems) =>{
    return[...oldItems,inputList];
   });
   setInputList("");
  };
  const deleteItems = (id) =>{
    console.log("deleted");
  
  setItems((oldItems) =>{
  return oldItems.filter((arrElem,index) =>{
    return index !== id;
  });
   } );
  };
return(
  <>
    <div className="main_div">
      <div className='center_div'>
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder='add name' onChange={itemEvent}
        value = {inputList}/>
        <button onClick={listofItems}>+</button>
        <ol>
         
            {/* {inputList} */}
           { Items.map((itemval,index)=>{
            return <TodoLists key={index} 
            id={index}
            text ={itemval}
            onSelect={deleteItems}
             />;
            })}

          
        </ol>
      </div>
    </div>
  </>
)
};
export default App;