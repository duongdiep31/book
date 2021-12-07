import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { get } from "../../../api/product"
import { itemPrd } from "../../../Store/action/products"
import Views from "./prdViews"
import { addToCart } from "../../../api/cartApi"
import { toast } from "react-toastify"
import { addtocart } from "../../../Store/slice/cartSlice"
import { addtocartApi } from "../../../Store/action/cartAction"
const CListPrd = (props) => {
  const url = "#productView"
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.product)
  const fetchUser = useSelector((state) => state.auth.auth)
  useEffect(() => {
    dispatch(itemPrd())
  }, [dispatch])
  const productsList = () => {
    if (products && Array.isArray(products)) {
      return products.map(item => {
        return (<React.Fragment key={item._id} >
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to={`/detail/${item._id}`}><img style={{ width: '255px', height: '350px' }} className="img-fluid w-100" src={item.image} alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><button onClick={async () => {
                      const { data } = await get(item._id)
                      const cartItems = {
                        ...data,
                        quantity: 1
                      }
                      if (fetchUser) {
                        const idUser = fetchUser.user._id
                        try {
                          const dataApi = {
                            idUser: idUser,
                            idBook: data._id,
                            quantity: 1
                          }
                          dispatch(addtocartApi(dataApi))
                          toast.success("SuccessFully")
                        } catch (error) {
                          toast.error("Failed")
                        }
                      } else {
                        dispatch(addtocart(cartItems))
                      }

                    }} className="btn btn-sm btn-dark">Add to cart</button></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href={url} data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">{item.name}</Link></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
        </React.Fragment>)
      })
    }
  }
  return (
    <React.Fragment>
      <Views />
      <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        <div className="row mb-3 align-items-center">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <p className="text-small text-muted mb-0">Showing 1–12 of 53 results</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
              <li className="list-inline-item text-muted mr-3"><Link className="reset-anchor p-0" to="#"><i className="fas fa-th-large" /></Link></li>
              <li className="list-inline-item text-muted mr-3"><Link className="reset-anchor p-0" to="#"><i className="fas fa-th" /></Link></li>
              <li className="list-inline-item">
                <select className="selectpicker ml-auto" name="sorting" data-width={200} data-style="bs-select-form-control" data-title="Default sorting">
                  <option value="default">Default sorting</option>
                  <option value="popularity">Popularity</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* PRODUCT*/}
          {productsList()}

        </div>
        {/* PAGINATION*/}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center justify-content-lg-end">
            <li className="page-item"><Link className="page-link" to="#" aria-label="Previous"><span aria-hidden="true">«</span></Link></li>
            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item"><Link className="page-link" to="#" aria-label="Next"><span aria-hidden="true">»</span></Link></li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default CListPrd