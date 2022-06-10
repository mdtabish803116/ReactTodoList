import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import React from "react";
import { v4 as uuid } from 'uuid';

const Grocery = () => {
  const [data , setData] = React.useState([]);
  const [showAll , setShowAll] = React.useState(true);

  const handleAdd = (item) => {
      const TodoItem = {
          item : item,
          status : false,
          id : uuid()
      };

      setData([...data , TodoItem]);
  };

  const handleToggle = (id) => {
      const updatedData = data.map((todo) => { 
           return (todo.id === id ? {...todo , status : !todo.status} : todo)
  })

      setData(updatedData);
  }

  const handleDelete = (id) => {
        const updatedData = data.filter((todo) =>{
            return (todo.id != id)
        })

        setData(updatedData);
  }

    return (
        <>
               <GroceryInput handleAdd = {handleAdd}/>
               <GroceryList data = {data}
                  handleToggle = {handleToggle}
                  handleDelete = {handleDelete}
                  showAll = {showAll}/>
                <button onClick = {() => setShowAll(!showAll)} style = {{
                      marginTop : "50px",
                      cursor : "pointer"
                }}>
                    {showAll ? "SHOW ONLY UNFINISHED TASK" : "SHOW ALL TASK"}</button>
        </>
    )
}

export default Grocery;