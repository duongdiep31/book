import React from "react"
import { Link } from "react-router-dom"
const ClistCategories = (props) => {

    return(
      
      
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">

        {
          props.categories.map((item,index) => {



            return(



              <React.Fragment>

                    <li className="mb-2"><Link className="reset-anchor" to="#">{item.name}</Link></li>
                    

              </React.Fragment>
            )
          })
        }

      </ul>
      
      )
}
 export default ClistCategories