import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  itemcate } from "../../../Store/action/categories"
const ClistCategories = (props) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.category)
    useEffect(()=>{
      dispatch(itemcate())
    },[dispatch])
    let Result;
    if (categories) {
        Result =  categories.map((item,index) => {
          return(
            <React.Fragment key={index}>
                  <li className="mb-2"><Link className="reset-anchor" to={`/productCate/${item._id}`}>{item.name}</Link></li>
            </React.Fragment>
          )
        })
    }



    return(
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
        <li className="mb-2"><Link className="reset-anchor" to="/shop">All</Link></li>
        {Result}
      </ul>
      )
}
 export default ClistCategories