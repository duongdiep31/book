import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllCartApi, removeCart } from '../../Store/action/cartAction'
import { decreaseCart, increaseCart, removeItemFromCart } from "../../Store/slice/cartSlice"
const Cart = () => {
  const dispatch = useDispatch()
  const fetchItemCart = useSelector((state) => state.cart.cart)
  const fetchItemCartApi = useSelector((state) => state.cartApi.cartApi)
  useEffect(() => {
    dispatch(getAllCartApi())
  }, [dispatch])
  const fetchUser = useSelector((state) => state.auth.auth) 
  const subtotal = fetchItemCart.reduce((a, b) => a + b.price * b.quantity, 0)
  const nf = Intl.NumberFormat();
    const listCart = () => {
    if (fetchUser) {
      const cartUser = fetchItemCartApi.filter(item => item.idUser === fetchUser.user._id)
      const Result = cartUser.map((item, index) => {
        return (
          <React.Fragment key={index} >
            <tr>
              <th className="pl-0 border-0" scope="row">
                <div className="media align-items-center"><Link className="reset-anchor d-block animsition-link" to="detail.html"><img src={item.idBook.image} alt="..." width="70" /></Link>
                  <div className="media-body ml-3"><strong className="h6"><Link className="reset-anchor animsition-link" to="detail.html">{item.idBook.name}</Link></strong></div>
                </div>
              </th>
              <td className="align-middle border-0">
                <p className="mb-0 small">{item.idBook.price}</p>
              </td>
              <td className="align-middle border-0">
                <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
                  <div className="quantity">
                    {/* <button
                      // onClick={() => dispatch(decreaseCart(item.idBook._id))}
                      className="dec-btn p-0"><i className="fas fa-caret-left"></i></button> */}
                    <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={item.quantity} />
                    {/* <button
                      onClick={() => dispatch(increaseCartApi(item.idBook._id))}
                      className="inc-btn p-0"><i className="fas fa-caret-right"></i></button> */}
                  </div>
                </div>
              </td>
              <td className="align-middle border-0">
                <p className="mb-0 small">{nf.format(item.quantity * item.idBook.price)}</p>
              </td>
              <td className="align-middle border-0"><Link onClick={() => dispatch(removeCart(item._id))} className="reset-anchor" to="#"><i className="fas fa-trash-alt small text-muted"></i></Link></td>
            </tr>
          </React.Fragment>
        )
      })
      return Result
    }
    else {
      return fetchItemCart.map((item, index) => {
        return (
          <React.Fragment key={index} >
            <tr>
              <th className="pl-0 border-0" scope="row">
                <div className="media align-items-center"><Link className="reset-anchor d-block animsition-link" to={`/detail/${item._id}`}><img src={item.image} alt="..." width="70" /></Link>
                  <div className="media-body ml-3"><strong className="h6"><Link className="reset-anchor animsition-link" to="detail.html">{item.name}</Link></strong></div>
                </div>
              </th>
              <td className="align-middle border-0">
                <p className="mb-0 small">{item.price}</p>
              </td>
              <td className="align-middle border-0">
                <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
                  <div className="quantity">
                    <button
                      onClick={() => dispatch(decreaseCart(item._id))}
                      className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                    <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" onChange={(event) =>{
                      console.log(event);
                    }} value={item.quantity} />
                    <button
                      onClick={() => dispatch(increaseCart(item._id))}
                      className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                  </div>
                </div>
              </td>
              <td className="align-middle border-0">
                <p className="mb-0 small">{nf.format(item.quantity * item.price)}</p>
              </td>
              <td className="align-middle border-0"><Link onClick={() => dispatch(removeItemFromCart(item._id))} className="reset-anchor" to="#"><i className="fas fa-trash-alt small text-muted"></i></Link></td>
            </tr>
          </React.Fragment>
        )
      })
    }
  }
  const subTotal = () => {
    if (fetchUser) {
      const cartUser = fetchItemCartApi.filter(item => item.idUser === fetchUser.user._id)
      const subtotalApi = cartUser.reduce((a, b) => {
        return a + (b.idBook.price) * b.quantity
      }, 0)
      return (
        <>
          <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">{nf.format(subtotalApi)}</span></li>
          <li className="border-bottom my-2" />
          <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{nf.format(subtotalApi)}</span></li>
          <li>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">{nf.format(subtotal)}</span></li>
          <li className="border-bottom my-2" />
          <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{nf.format(subtotal)}</span></li>
          <li>
          </li>
        </>
      )
    }
  }
  return (
    <div>
      <div className="container">
        {/* HERO SECTION*/}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Cart</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              {/* CART TABLE*/}
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Product</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Quantity</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Total</strong></th>
                      <th className="border-0" scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listCart()
                    }
                  </tbody>
                </table>
              </div>
              {/* CART NAV*/}
              <div className="bg-light px-4 py-3">
                <div className="row align-items-center text-center">
                  <div className="col-md-6 mb-3 mb-md-0 text-md-left"><Link className="btn btn-link p-0 text-dark btn-sm" to="/shop"><i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</Link></div>
                  <div className="col-md-6 text-md-right"><Link className="btn btn-outline-dark btn-sm" to="/checkout">Procceed to checkout<i className="fas fa-long-arrow-alt-right ml-2" /></Link></div>
                </div>
              </div>
            </div>
            {/* ORDER TOTAL*/}
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    {subTotal()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}
export default Cart