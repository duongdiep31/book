import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllcategory } from "../../../Store/action/categories"
const ClistCategories = (props) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
    useEffect(()=>{
      dispatch(getAllcategory)
    },[dispatch])
    console.log(categories);
    let Result;
    if (categories) {
        Result =  categories.map((item,index) => {
          return(
            <React.Fragment key={index}>
                  <li className="mb-2"><Link className="reset-anchor" to="#">{item.name}</Link></li>
            </React.Fragment>
          )
        })
    }



    return(
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
        {
            Result
        }
      </ul>
      )
}
 export default ClistCategories