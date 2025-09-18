import React, { useState } from "react";


export const AppFilterContext = React.createContext()
const AppFilterContextProvider = (props) =>{

    const [filteredData , setFilterData] = useState([])
    const changeFilterData =(itemData)=>{
        setFilterData(itemData)
    }

    const [checkedData , setcheckedData] = useState([
        { id:"1" , type: "Beef"   , checked :false },
        { id:"2" , type: "Lamb"   , checked :false },
        { id:"3" , type: "Chicken", checked :false },
        { id:"4" , type: "Birds"  , checked :false },
      
    ])
    const changecheckedData=(itemData)=>{
        setcheckedData(itemData)
    }
    return (
        <AppFilterContext.Provider value={{ checkedData,changecheckedData , filteredData , changeFilterData }}>
            {props.children}
        </AppFilterContext.Provider>
    )
}

export default AppFilterContextProvider;