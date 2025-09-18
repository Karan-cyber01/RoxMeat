import React ,{useContext } from 'react'
import Items from '../customcomponents/items'
import { AppStoreContext } from "../context/createcontext";
import RecipeItem from '../customcomponents/recipeItem';
import Footer, { Subscribe } from '../customcomponents/footer';

const Recipe = () => {
  
  const {recipedata, setrecipedata} = useContext(AppStoreContext);
  console.log("new",recipedata)
  return (
    <div className='recipe_body'>
        <RecipeItem heading={"Recipe"} data={recipedata} />
        <Footer/>
       
    </div>
  )
}

export default Recipe