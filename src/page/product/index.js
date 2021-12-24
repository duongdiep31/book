import React from "react"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import ClistCategories from "./component/listcategories"
import {useTranslation} from 'react-i18next'
const Shop = (props) => {
  const {t } = useTranslation()
    return(
        <React.Fragment>
            <div>
  
  <div className="container">
    {/* HERO SECTION*/}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">{t('titlePage.shop')}</h1>
          </div>
          <div className="col-lg-6 text-lg-right">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                <li className="breadcrumb-item"><Link to="/">{t('titlePage.home')}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{t('titlePage.shop')}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container p-0">
        <div className="row">
          {/* SHOP SIDEBAR*/}
          <div className="col-lg-3 order-2 order-lg-1">
                <ClistCategories {...props} />
       
          
          </div>
          {/* SHOP LISTING*/}
          <Outlet />
                  
        </div>
      </div>
    </section>
  </div>
</div>

        </React.Fragment>
    )
}
export default Shop