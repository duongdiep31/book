import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decreaseCart, increaseCart, removeItemFromCart } from "../../Store/slice/cartSlice"
const Cart = () => {
    const dispatch = useDispatch()
    const fetchItemCart = useSelector((state) => state.cart.cart)
       const fetchUser  = useSelector((state) => state.auth.auth)
       console.log(fetchUser);
    const subtotal = fetchItemCart.reduce((a, b) => a + b.price * b.quantity, 0)
    const nf = Intl.NumberFormat();

    const listCart = () => {

      if (fetchUser) {
            



        
      }else{
          return   fetchItemCart.map((item, index) => {
            const total = item.quantity * item.price
            const quantity = item.quantity
            return(
              <React.Fragment key={index} >
            <tr>
      <th className="pl-0 border-0" scope="row">
        <div className="media align-items-center"><Link className="reset-anchor d-block animsition-link" to="detail.html"><img src={item.image} alt="..." width={70} /></Link>
          <div className="media-body ml-3"><strong className="h6"><Link className="reset-anchor animsition-link" to="detail.html">{item.name}</Link></strong></div>
        </div>
      </th>
      <td className="align-middle border-0">
        <p className="mb-0 small">{nf.format(item.price)}</p>
      </td>
      <td className="align-middle border-0">
        <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
          <div className="quantity">
            <button onClick = {() => {
                      dispatch(decreaseCart(item._id))
            }} className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
            <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={quantity} />
            <button onClick = {() => {
                      dispatch(increaseCart(item._id))
            }} className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
          </div>
        </div>
      </td>
      <td className="align-middle border-0">
        <p className="mb-0 small">{nf.format(total)}</p>
      </td>
      <td className="align-middle border-0"><Link onClick={() => dispatch(removeItemFromCart(item._id))} className="reset-anchor" to="#"><i className="fas fa-trash-alt small text-muted" /></Link></td>
    </tr>

              </React.Fragment>
            )
          } )
      }









    }

        return(
            <div>
  <div className="modal fade" id="productView" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="row align-items-stretch">
            <div className="col-lg-6 p-lg-0"><Link className="product-view d-block h-100 bg-cover bg-center" style={{background: 'url(img/product-5.jpg)'}} to="img/product-5.jpg" data-lightbox="productview" title="Red digital smartwatch" /><Link className="d-none" to="img/product-5-alt-1.jpg" title="Red digital smartwatch" data-lightbox="productview" /><Link className="d-none" to="img/product-5-alt-2.jpg" title="Red digital smartwatch" data-lightbox="productview" /></div>
            <div className="col-lg-6">
              <button className="close p-4" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className="p-5 my-md-4">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                </ul>
                <h2 className="h4">Red digital smartwatch</h2>
                <p className="text-muted">$250</p>
                <p className="text-small mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                <div className="row align-items-stretch mb-4">
                  <div className="col-sm-7 pr-sm-0">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                      <div className="quantity">
                        <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                        <input className="form-control border-0 shadow-0 p-0" type="text" defaultValue={1} />
                        <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-sm-0"><Link className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" to="cart.html">Add to cart</Link></div>
                </div><Link className="btn btn-link text-dark p-0" to="#"><i className="far fa-heart mr-2" />Add to wish list</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
                <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
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
              <div className="col-md-6 mb-3 mb-md-0 text-md-left"><Link className="btn btn-link p-0 text-dark btn-sm" to="shop.html"><i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</Link></div>
              <div className="col-md-6 text-md-right"><Link className="btn btn-outline-dark btn-sm" to="checkout.html">Procceed to checkout<i className="fas fa-long-arrow-alt-right ml-2" /></Link></div>
            </div>
          </div>
        </div>
        {/* ORDER TOTAL*/}
        <div className="col-lg-4">
          <div className="card border-0 rounded-0 p-lg-4 bg-light">
            <div className="card-body">
              <h5 className="text-uppercase mb-4">Cart total</h5>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">{nf.format(subtotal)}</span></li>
                <li className="border-bottom my-2" />
                <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{nf.format(subtotal)}</span></li>
                <li>
                  <form action="#">
                    <div className="form-group mb-0">
                      <input className="form-control" type="text" placeholder="Enter your coupon" />
                      <button className="btn btn-dark btn-sm btn-block" type="submit"> <i className="fas fa-gift mr-2" />Apply coupon</button>
                    </div>
                  </form>
                </li>
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