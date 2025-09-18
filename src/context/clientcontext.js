import React, { useState } from "react";


export const  AppClientContext = React.createContext()
const AppClientContextProvider = (props) =>{

    const [ShippingData, setShippingData] = useState([])
    const changeShippingData = (x) => {
        setShippingData(x)  
    }
    console.log(ShippingData)

    const [Data, setData] = useState({})
    const changeData = (x) => {
        setData(x)  
    }
    console.log(Data)

    const [pickup, setpickup] = useState({})
    const changepickup = (x) => {
        setpickup(x)  
    }
    console.log(pickup)


    const [card, setcard] = useState({})
    const changecard = (x) => {
        setcard(x)  
    }
    console.log(pickup)

    const [location, setlocation] = useState("Rox Meat")
    const changelocation = (x) => {
        setlocation(x)  
    }
    console.log(Data)
    return (
        <AppClientContext.Provider value={{card , changecard, pickup , changepickup, location, changelocation, Data , changeData , ShippingData , changeShippingData }}>
            {props.children}
        </AppClientContext.Provider>
    )
}

export default AppClientContextProvider;