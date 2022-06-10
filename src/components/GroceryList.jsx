

const GroceryList = ({data , handleToggle , handleDelete , showAll}) => {
    return (
        <div>
        {
              data.filter((item) => {
                  return (showAll ? true : item.status === false)
              }).map((item , index) => {
                  return <div key = {item.id}
                              style = {{ 
                                     display : "flex",
                                     width : "60%",
                                     margin : "auto",
                                     height : "40px",
                                     alignItems : "center",
                                     justifyContent : "space-between",
                                     marginTop : "20px"
                              }}
                       > <span style = {{
                              fontWeight : "bold"
                       }}>{index + 1}</span>
                         <h1 style = {{
                             width : "30%",
                             overflow : "auto",
                             padding : "0px 10px"   
                                   }}>{item.item}</h1>
                         <button onClick = {() => handleToggle(item.id)} style = {
                             {
                                 height : "30px",
                                 cursor : "pointer",
                                 width : "30%"
                             }
                         }>{item.status ? "Completed" : "Not Completed"}
                         </button>
                         <button onClick = {() => handleDelete(item.id)}
                          style = {{
                              height : "30px",
                              cursor : "pointer",
                              width : "30%"
                          }}>Delete</button>
                      </div>
              })
        }

        </div>
        
    )
}

export default GroceryList;