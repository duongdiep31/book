import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { get } from "../../../api/product"
import { itemPrd } from "../../../Store/action/products"
import Views from "./prdViews"
import { toast } from "react-toastify"
import { addtocart } from "../../../Store/slice/cartSlice"
import { addtocartApi } from "../../../Store/action/cartAction"
import ReactPaginate from 'react-paginate'
import { addtoWishlist, getAllWishlist } from "../../../Store/action/wishlistAction"
import { useNavigate } from "react-router"
import {useTranslation} from 'react-i18next'
const CListPrd = () => {
  const {t} = useTranslation()
  const url = "#productView"
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.product)
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  useEffect(() => {
    const getWish = async () => {
      dispatch(getAllWishlist())
    }
    getWish()
  }, [dispatch])
  const fetchUser = useSelector((state) => state.auth.auth)
  const [page, setPage] = useState({
    page: 1,
    limit: 9
  })
  useEffect(() => {
    dispatch(itemPrd(page))
  }, [dispatch, page])
  const navigate = useNavigate()
  const handlePageClick = (data) => {
    setPage({
      page: data.selected + 1,
      limit: 9
    })
  }
  const nf = Intl.NumberFormat();
  const productsList = () => {
    const listBook = products.list
    if (listBook && Array.isArray(listBook)) {
      return listBook.map(item => {
        return (<React.Fragment key={item._id} >
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to={`/detail/${item._id}`}><img style={{ width: '255px', height: '350px' }} className="img-fluid w-100" src={item.image} alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><button className="btn btn-sm btn-outline-dark" onClick={async () => {
                      if (fetchUser) {
                        const idUser = fetchUser.users._id
                          if (wishlist && Array.isArray(wishlist)) {
                            const existWishlist = wishlist.filter((item) => item.idUser._id === idUser)
                            if (existWishlist) {
                              const existItems = existWishlist.find((data) => data.idBook._id === item._id)
                              if (existItems) {
                                toast.error("Books already exist")
                              } else {
                                const data = {
                                  idUser: idUser,
                                  idBook: item._id
                                }
                                dispatch(addtoWishlist(data))
                                toast.success("SuccessFully")
                              } 
                            }
                          }
                      } else {
                        navigate('/signin')
                      }
                    }} ><i className="far fa-heart" /></button></li>
                    <li className="list-inline-item m-0 p-0"><button onClick={async () => {
                      const { data } = await get(item._id)
                      const cartItems = {
                        ...data,
                        quantity: 1
                      }
                      if (fetchUser) {
                        const idUser = fetchUser.users._id
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

                    }} className="btn btn-sm btn-dark">{t('buttonCart.button')}</button></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href={url} data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">{item.name}</Link></h6>
              <p className="small text-muted">{nf.format(item.price)} Vnd</p>
            </div>
          </div>
        </React.Fragment>)
      })
    }
  }
  const showing = () => {
    const end = page.limit * page.page
    const start = (page.page - 1) * page.limit + 1
    return (
      <p className="text-small text-muted mb-0"> {t('shop.show', {start: start, end: end, total: products.total})}</p>

    )
  }
  return (
    <React.Fragment>
      <Views />
      <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        <div className="row mb-3 align-items-center">
          <div className="col-lg-6 mb-2 mb-lg-0">
            {showing()}
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
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={Math.ceil(products.total / page.limit)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center justify-content-lg-end'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
          />
          {/* <li className="page-item"><Link className="page-link" to="#" aria-label="Previous"><span aria-hidden="true">«</span></Link></li>
            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item"><Link className="page-link" to="#" aria-label="Next"><span aria-hidden="true">»</span></Link></li> */}

        </nav>
      </div>
    </React.Fragment>
  )
}

export default CListPrd