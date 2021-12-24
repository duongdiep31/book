import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
const Footer = () => {
  const {t} = useTranslation()
        return (
          <footer className="bg-dark text-white">
          <div className="container py-4">
            <div className="row py-5">
              <div className="col-md-4 mb-3 mb-md-0">
                <h6 className="text-uppercase mb-3">{t('customerService.title')}</h6>
                <ul className="list-unstyled mb-0">
                  <li><Link className="footer-link" to="#">{t('customerService.help')}</Link></li>
                  <li><Link className="footer-link" to="#">{t('customerService.return')}</Link></li>  
                  <li><Link className="footer-link" to="#">{t('customerService.online')}</Link></li>
                  <li><Link className="footer-link" to="#">{t('customerService.term')}</Link></li>
                </ul>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <h6 className="text-uppercase mb-3">{t('company.title')}</h6>
                <ul className="list-unstyled mb-0">
                  <li><Link className="footer-link" to="#">{t('company.what')}</Link></li>
                  <li><Link className="footer-link" to="#">{t('company.available')}</Link></li>
                  <li><Link className="footer-link" to="#">{t('company.latest')}</Link></li>
                  <li><Link className="footer-link" to="#">{t('company.faq')}</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="text-uppercase mb-3">{t('social.title')}</h6>
                <ul className="list-unstyled mb-0">
                  <li><Link className="footer-link" to="#">Twitter</Link></li>
                  <li><Link className="footer-link" to="#">Instagram</Link></li>
                  <li><Link className="footer-link" to="#">Tumblr</Link></li>
                  <li><Link className="footer-link" to="#">Pinterest</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-top pt-4" style={{borderColor: '#1d1d1d !important'}}>
              <div className="row">
                <div className="col-lg-6">
                  <p className="small text-muted mb-0">© 2020 All rights reserved.</p>
                </div>
                <div className="col-lg-6 text-lg-right">
                  <p className="small text-muted mb-0">Template designed by <Link className="text-white reset-anchor" to="https://bootstraptemple.com/p/bootstrap-ecommerce">Bootstrap Temple</Link></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        

        )
}
export default Footer