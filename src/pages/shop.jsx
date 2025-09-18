import React, { useContext } from 'react'
import Footer, { Subscribe } from '../customcomponents/footer'
import Items from '../customcomponents/items'
import Shopleftbar from '../customcomponents/shopleftbar'
import { AppStoreContext } from "../context/createcontext";
import { AppFilterContext } from '../context/filterdatacontext';


const Shop = () => {
    const { data, changedata } = useContext(AppStoreContext);
    const { filteredData, changeFilterData } = useContext(AppFilterContext);


  return (
    <>
    <div className='shop_body'>
        <div className='row'>
            <div className='col-md-4'><Shopleftbar/></div>
            <div className='col-md-8'><Items  data={filteredData} /></div>
        </div>
    </div>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Shop