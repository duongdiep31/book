import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { get } from "../api/product";
import { addtocart } from "../Store/slice/cartSlice";

const Details= () => {
        const {id} = useParams()
        const [item, setItem] = useState({})
        useEffect(async () => {
            const {data} = await get(id)
            setItem(data)
        },[])
        console.log(item);
        return(
            <section className="py-5">
  <div className="container">
    <div className="row mb-5">
      <div className="col-lg-6">
        {/* PRODUCT SLIDER*/}
        <div className="row m-sm-0">
          <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
            <div className="owl-thumbs d-flex flex-row flex-sm-column" data-slider-id={1}>
              {/* <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={item.image} alt="..." /></div> */}
              {/* <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src="img/product-detail-2.jpg" alt="..." /></div>
              <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src="img/product-detail-3.jpg" alt="..." /></div>
              <div className="owl-thumb-item flex-fill mb-2"><img className="w-100" src="img/product-detail-4.jpg" alt="..." /></div> */}
            </div>
          </div>
          <div className="col-sm-10 order-1 order-sm-2">
            <div className="owl-carousel product-slider" style={{
                display: 'block'
            }} data-slider-id={1}>
              <Link className="d-block" to="#" data-lightbox="product" title="Product item 1">
                <img className="img-fluid" src={item.image} alt="..." />
              </Link>
              {/* <Link className="d-block" to="img/product-detail-2.jpg" data-lightbox="product" title="Product item 2">
                <img className="img-fluid" src="img/product-detail-2.jpg" alt="..." />
              </Link>   
              <Link className="d-block" to="img/product-detail-3.jpg" data-lightbox="product" title="Product item 3">
                <img className="img-fluid" src="img/product-detail-3.jpg" alt="..." /></Link>
              <Link className="d-block" to="img/product-detail-4.jpg" data-lightbox="product" title="Product item 4">
                <img className="img-fluid" src="img/product-detail-4.jpg" alt="..." /></Link> */}
                </div>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS*/}
      <div className="col-lg-6">
        <ul className="list-inline mb-2">
          <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
          <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
          <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
          <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
          <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
        </ul>
        <h1>{item.name}</h1>
        <p className="text-muted lead">{item.price}</p>
        <p className="text-small mb-4">{item.description}</p>
        <div className="row align-items-stretch mb-4">
          <div className="col-sm-5 pr-sm-0">
            <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
              <span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
              <div className="quantity">
                <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                <input className="form-control border-0 shadow-0 p-0" type="text" defaultValue={1} />
                <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pl-sm-0"><Link className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" onClick={ async()=>{
              const product = {
                    ...item,
                    quantity: 1
              }
               addtocart(product)
          }} to="#">Add to cart</Link></div>
        </div><Link className="btn btn-link text-dark p-0 mb-4" to="#"><i className="far fa-heart mr-2" />Add to wish
          list</Link><br />
        <ul className="list-unstyled small d-inline-block">
          <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">SKU:</strong><span className="ml-2 text-muted">039</span></li>
          <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Category:</strong><Link className="reset-anchor ml-2" to="#">Demo
              Products</Link></li>
          <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Tags:</strong><Link className="reset-anchor ml-2" to="#">Innovation</Link></li>
        </ul>
      </div>
    </div>
    {/* DETAILS TABS*/}
    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
      <li className="nav-item"><Link className="nav-link active" id="description-tab" data-toggle="tab" to="#description" role="tab" aria-controls="description" aria-selected="true">Description</Link></li>
      <li className="nav-item"><Link className="nav-link" id="reviews-tab" data-toggle="tab" to="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</Link></li>
    </ul>
    <div className="tab-content mb-5" id="myTabContent">
      <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
        <div className="p-4 p-lg-5 bg-white">
          <h6 className="text-uppercase">Product description </h6>
          <p className="text-muted text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
        <div className="p-4 p-lg-5 bg-white">
          <div className="row">
            <div className="col-lg-8">
              <div className="media mb-3"><img className="rounded-circle" src="img/customer-1.png" alt={'...'} width={50} />
                <div className="media-body ml-3">
                  <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                  <p className="small text-muted mb-0 text-uppercase">20 May 2020</p>
                  <ul className="list-inline mb-1 text-xs">
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning" /></li>
                  </ul>
                  <p className="text-small mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="media"><img className="rounded-circle" src="img/customer-2.png" alt={'...'} width={50} />
                <div className="media-body ml-3">
                  <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                  <p className="small text-muted mb-0 text-uppercase">20 May 2020</p>
                  <ul className="list-inline mb-1 text-xs">
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning" /></li>
                  </ul>
                  <p className="text-small mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* RELATED PRODUCTS*/}
    <h2 className="h5 text-uppercase mb-4">Related products</h2>
    <div className="row">
      {/* PRODUCT*/}
      <div className="col-lg-3 col-sm-6">
        <div className="product text-center skel-loader">
          <div className="d-block mb-3 position-relative"><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="#">Add to cart</Link></li>
                <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
              </ul>
            </div>
          </div>
          <h6> <Link className="reset-anchor" to="detail.html">Kui Ye Chen’s AirPods</Link></h6>
          <p className="small text-muted">$250</p>
        </div>
      </div>
      {/* PRODUCT*/}
      <div className="col-lg-3 col-sm-6">
        <div className="product text-center skel-loader">
          <div className="d-block mb-3 position-relative"><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="#">Add to cart</Link></li>
                <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
              </ul>
            </div>
          </div>
          <h6> <Link className="reset-anchor" to="detail.html">Air Jordan 12 gym red</Link></h6>
          <p className="small text-muted">$300</p>
        </div>
      </div>
      {/* PRODUCT*/}
      <div className="col-lg-3 col-sm-6">
        <div className="product text-center skel-loader">
          <div className="d-block mb-3 position-relative"><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="#">Add to cart</Link></li>
                <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
              </ul>
            </div>
          </div>
          <h6> <Link className="reset-anchor" to="detail.html">Cyan cotton t-shirt</Link></h6>
          <p className="small text-muted">$25</p>
        </div>
      </div>
      {/* PRODUCT*/}
      <div className="col-lg-3 col-sm-6">
        <div className="product text-center skel-loader">
          <div className="d-block mb-3 position-relative"><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="#">Add to cart</Link></li>
                <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
              </ul>
            </div>
          </div>
          <h6> <Link className="reset-anchor" to="detail.html">Timex Unisex Originals</Link></h6>
          <p className="small text-muted">$351</p>
        </div>
      </div>
    </div>
  </div>
</section>

        )
}
export default Details