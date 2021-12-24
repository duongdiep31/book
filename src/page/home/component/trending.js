import React from "react"
import { Link } from "react-router-dom"
import {useTranslation} from 'react-i18next'
const Trending= (props) => {
  const {t} = useTranslation()
    return (
        <section className="py-5">
        <header>
          <h2 className="h5 text-uppercase mb-4">{t('trending.top')}</h2>
        </header>
        <div className="row">
          {/* PRODUCT*/}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">{t('buttonCart.button')}</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Kui Ye Chen’s AirPods</Link></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
      
        </div>
      </section>
    )
}
export default Trending