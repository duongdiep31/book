import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Views from './prdViews';
import { Link } from 'react-router-dom';
import { get } from "../../../api/product"
import { toast } from "react-toastify"
import { addtocart } from "../../../Store/slice/cartSlice"
import { addtocartApi } from "../../../Store/action/cartAction"
import { searchItem } from '../../../Store/action/products';
const Productsearch = () => {
  const { value } = useParams()
  const dispatch = useDispatch()
  const fetchUser = useSelector((state) => state.auth.auth)
  const products = useSelector((state) => state.product.product)
  const [page, setPage] = useState(1)
  useEffect(() => {
    const getPrdSearch = async () => {
      await dispatch(searchItem(value, page))
    }
    getPrdSearch()
  }, [dispatch, value, page])
  const url = "#productView"
  const nf = Intl.NumberFormat();
  const handlePageClick = (data) => {
    setPage(
      data.selected + 1,
    )
  }
  const productsList = () => {
    const list = products.searchProduct
    if (list && Array.isArray(list)) {
      return list.map((item, index) => {
     return(   <React.Fragment key={index}>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" />
                <Link className="d-block" to={`/detail/${item._id}`}>
                  <img style={{ width: '255px', height: '350px' }} className="img-fluid w-100" src={item.image} alt="..." />
                </Link>
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
              <p className="small text-muted">{nf.format(item.price)} Vnd</p>
            </div>
          </div>
        </React.Fragment>)
      })
    }else{
      return(<h1>Not Found</h1>)
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
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={products.totalPage}
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
  );
}

export default Productsearch;
