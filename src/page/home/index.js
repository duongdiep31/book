import React from "react"
import Trending from "./component/trending"
import { Link } from "react-router-dom"
import {useTranslation} from 'react-i18next'
import Views from '../product/component/prdViews'
const Homepage = () => {
  const {t} = useTranslation()
  return (
    <React.Fragment>
      <div>
       <Views />
        {/* HERO SECTION*/}
        <div  className="container">
          <section className="hero pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: 'url(img/banner.jpeg)',
          width:'1124px',
          margin:'auto'
        }}>
            <div className="container py-5">
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">{t('banner.new')}</p>
                  <h1 className="h2 text-uppercase mb-3">{t('banner.title')}</h1><Link className="btn btn-dark" to="shop.html">{t('banner.button')}</Link>
                </div>
              </div>
            </div>
          </section>
          {/* TRENDING PRODUCTS*/}
          <Trending   />
          {/* SERVICES*/}
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="d-inline-block">
                    <div className="media align-items-end">
                      <svg className="svg-icon svg-icon-big svg-icon-light">
                        <use to="#delivery-time-1"> </use>
                      </svg>
                      <div className="media-body text-left ml-3">
                        <h6 className="text-uppercase mb-1">{t('ship.title')}</h6>
                        <p className="text-small mb-0 text-muted">{t('ship.content')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="d-inline-block">
                    <div className="media align-items-end">
                      <svg className="svg-icon svg-icon-big svg-icon-light">
                        <use to="#helpline-24h-1"> </use>
                      </svg>
                      <div className="media-body text-left ml-3">
                        <h6 className="text-uppercase mb-1">{t('service.title')}</h6>
                        <p className="text-small mb-0 text-muted">{t('service.title')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-inline-block">
                    <div className="media align-items-end">
                      <svg className="svg-icon svg-icon-big svg-icon-light">
                        <use to="#label-tag-1"> </use>
                      </svg>
                      <div className="media-body text-left ml-3">
                        <h6 className="text-uppercase mb-1">{t('offer.title')}</h6>
                        <p className="text-small mb-0 text-muted">{t('offer.title')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* NEWSLETTER*/}
          <section className="py-5">
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-6 mb-3 mb-lg-0">
                </div>
                <div className="col-lg-6">
                  <form action="#">
                    <div className="input-group flex-column flex-sm-row mb-3">
                      <input className="form-control form-control-lg py-3" type="email" placeholder={t('contact.email')} aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-dark btn-block" id="button-addon2" type="submit">{t('contact.button')}</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </React.Fragment>
  )


}
export default Homepage