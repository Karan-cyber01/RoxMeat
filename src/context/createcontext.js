import React, { useState } from 'react';
import one from "../assets/1.3.png";
import two from "../assets/1.2.png";
import three from "../assets/1.1.png";
import four from "../assets/1.4.png";
import five from "../assets/1.5.png";
import six from "../assets/1.6.png";
import seven from "../assets/1.7.png";
import eight from "../assets/1.3.png";
import nine from "../assets/1.9.png";
import one1 from "../assets/2.1.png";
import two1 from "../assets/2.2.png";
import three1 from "../assets/2.3.png";
import four1 from "../assets/2.4.png";
import five1 from "../assets/2.5.png";
import six1 from "../assets/2.6.png";
import seven1 from "../assets/2.7.png";
import eight1 from "../assets/2.8.png";
import nine1 from "../assets/2.9.png";
import t10 from "../assets/2.10.png";
import t11 from "../assets/2.11.png";
import t12 from "../assets/2.12.png";


export const AppStoreContext = React.createContext()

const AppStoreContextProvider = (props) => {

    const [state, setstate] = useState(null)
    const changestate = (data) => {
        setstate(data)  
    }
    const [total , setTotal] =useState(null)
    const changeTotal = (data) => {
        setTotal(data) 
        
    }
    const [recipe, setrecipe] = useState({})
    const changerecipe = (data) => {
        setrecipe(data) 
        
    }

    const [cart, setcart] = useState([])
    const changecart = (x) => {
        setcart(x)  
    }
 
    
    const [data, setdata] = useState([
        { id:"1" , imgName: one1,   type: "Chicken", quantity: "1",  price: "$ 44.99", desc: "Diced Chicken" },
        { id:"3" , imgName: three1, type: "Chicken", quantity: "1", price: "$ 24.99", desc: "Free Range Whole Chicken" },
        { id:"4" , imgName: four1,  type: "Birds",   quantity: "1", price: "$ 34.99", desc: "Quail" },
        { id:"5" , imgName: five1,  type: "Chicken", quantity: "1", price: "$ 33.99", desc: "Chicken Hearts" },
        { id:"6" , imgName: six1,   type: "Chicken", quantity: "1", price: "$ 44.99", desc: "Chicken Gizzard" },
        { id:"7" , imgName: seven1, type: "Birds",   quantity: "1", price: "$ 44.99", desc: "Small Hand Raised Pork Pies" },
        { id:"8" , imgName: eight1, type: "Lamb",    quantity: "1",price: "$ 34.99", desc: "Goat Cheese" },
        { id:"9" , imgName: nine1,  type: "Birds",   quantity: "1", price: "$ 44.99", desc: "Pigeon" },
        { id:"10" , imgName: t10,   type: "Beef",    quantity: "1", price: "$ 47.99", desc: "Beef Mince" },
        { id:"12" , imgName: t12,   type: "Beef",    quantity: "1", price: "$ 68.99", desc: "Sweetheart Valentines Steak" },
        { id:"13" , imgName: one,   type: "Lamb",    quantity: "1", price: "$ 44.99", desc: "Roast Leg of Lamb" },
        { id:"14" , imgName: two,   type: "Lamb",    quantity: "1", price: "$ 81.99", desc: "Welsh Rack of Lamb" },
        { id:"15" , imgName: three, type: "Lamb",    quantity: "1", price: "$ 42.99", desc: "Shoulder of Lamb Roast" },
      
      ])
    const changedata = (itemData) => {
        setdata(itemData)  
    }

    const [recipedata, setrecipedata] = useState([
        { id:"1" , imgName: one,    desc: "Roast Leg of Lamb" },
        { id:"2" , imgName: two,    desc: "Welsh Rack of Lamb" },
        { id:"3" , imgName: three,  desc: "Shoulder of Lamb Roast" },
        { id:"4" , imgName: four,   desc: "Goat Meat - Dice" },
        { id:"5" , imgName: five,   desc: "Plain or Choice of Marinades" },
        { id:"6" , imgName: six,    desc: "Roasted garlic hummus" },
        { id:"7" , imgName: seven,   desc: "Roast chicken with lemon, garlic and thyme" },
        { id:"8" , imgName: eight,   desc: "Italian-style meatballs with cheesy mash potatoes" },
        { id:"9" , imgName: nine,    desc: "Roasted pork chops with rosemary and red onion" },
      ])
    const changerecipedata = (itemData) => {
        setrecipedata(itemData)  
    }
    const [BuyData, setBuyData] = useState({});
    const changeBuyData = (x) => {
        setBuyData(x)  
    }

    const [ShippingData, setShippingData] = useState([]);
    const changeShippingData = (x) => {
        setShippingData(x)  
    }
    console.log(ShippingData)
    return (
        <AppStoreContext.Provider value={{ShippingData, changeShippingData ,BuyData , changeBuyData,  total, changeTotal, recipedata, setrecipedata, recipe , changerecipe ,changestate, state , data , changedata ,cart , changecart} }>
            {props.children}
        </AppStoreContext.Provider>
    )
}

export default AppStoreContextProvider;