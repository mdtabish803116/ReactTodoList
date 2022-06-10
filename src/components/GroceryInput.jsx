import React from "react";

const GroceryInput = ({handleAdd}) => {
    const [item , setItem ] = React.useState("");

    return (
          <div style = {{
                width : "50%",
                margin : "auto",
                height : "40px"
          }}>
                 <input 
                 style = {{
                    width : "80%",
                    height : "90%",
                    borderRadius : "5px",
                    fontSize : "18px"
              }}
                 type = "text" 
                 placeholder = "Enter Items" 
                 value = {item} 
                 onChange = {(e) => setItem(e.target.value)}>
                 </input>
                 <button 
                 style = {{
                     height : "100%",
                     fontSize : "18px"
                 }}
                 onClick = {() => {
                     handleAdd(item)
                     setItem("");
                     }}>
                         ADD ITEM
                </button>
          </div>
    )
}

export default GroceryInput ;