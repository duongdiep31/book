import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const fetchItemCart = useSelector((state) => state.cart.cart)
  const fetchItemCartApi = useSelector((state) => state.cart.cartApi)
  const subtotalApi = fetchItemCartApi.reduce((a, b) => a + b.price * b.quantity, 0)
  const fetchUser = useSelector((state) => state.auth.auth)
  const subtotal = fetchItemCart.reduce((a, b) => a + b.price * b.quantity, 0)
  const nf = Intl.NumberFormat();
  const form = () => {
    if (fetchUser) {
      console.log(fetchUser);
      return(
        <form action="#">
        <div className="row">
          <div className="col-lg-12 form-group">
            <label className="text-small text-uppercase" htmlFor="name">Name</label>
            <input defaultValue={fetchUser.user.name} className="form-control form-control-lg" id="name" type="text" placeholder="Enter your first name" />
          </div>
          <div className="col-lg-6 form-group">
            <label className="text-small text-uppercase" htmlFor="email">Email address</label>
            <input defaultValue ={fetchUser.user.email} className="form-control form-control-lg" id="email" type="email" placeholder="e.g. Jason@example.com" />
          </div>
          <div className="col-lg-6 form-group">
            <label className="text-small text-uppercase" htmlFor="phone">Phone number</label>
            <input defaultValue={fetchUser.user.phone} className="form-control form-control-lg" id="phone" type="tel" placeholder="e.g. +02 245354745" />
          </div>
          {/* <div className="col-lg-6 form-group">
            <label className="text-small text-uppercase" htmlFor="country">Country</label>
            <select className="selectpicker country" id="country" data-width="fit" data-style="form-control form-control-lg" data-title="Select your country" />
          </div> */}
          <div className="col-lg-12 form-group">
            <label className="text-small text-uppercase" htmlFor="address">Address line</label>
            <input className="form-control form-control-lg" id="address" type="text" placeholder="House number and street name" />
          </div>
          <div className="col-lg-6 form-group">
            <label className="text-small text-uppercase" htmlFor="city">Town/City</label>
            <input className="form-control form-control-lg" id="city" type="text" />
          </div>
          <div className="col-lg-6 form-group">
            <label className="text-small text-uppercase" htmlFor="state">State/County</label>
            <input className="form-control form-control-lg" id="state" type="text" />
          </div>
          <div className="col-lg-6 form-group">
            <div className="custom-control custom-checkbox">
              <input className="custom-control-input" id="alternateAddressCheckbox" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="alternateAddressCheckbox">Alternate billing address</label>
            </div>
          </div>
          <div className="col-lg-12 form-group">
            <button className="btn btn-dark" type="submit">Place order</button>
          </div>
        </div>
      </form>
      )
    } else {
      return (
        <form action="#">
          <div className="row">
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="firstName">First name</label>
              <input className="form-control form-control-lg" id="firstName" type="text" placeholder="Enter your first name" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="lastName">Last name</label>
              <input className="form-control form-control-lg" id="lastName" type="text" placeholder="Enter your last name" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="email">Email address</label>
              <input className="form-control form-control-lg" id="email" type="email" placeholder="e.g. Jason@example.com" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="phone">Phone number</label>
              <input className="form-control form-control-lg" id="phone" type="tel" placeholder="e.g. +02 245354745" />
            </div>
            {/* <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="country">Country</label>
                      <select className="selectpicker country" id="country" data-width="fit" data-style="form-control form-control-lg" data-title="Select your country" />
                    </div> */}
            <div className="col-lg-12 form-group">
              <label className="text-small text-uppercase" htmlFor="address">Address line</label>
              <input className="form-control form-control-lg" id="address" type="text" placeholder="House number and street name" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="city">Town/City</label>
              <input className="form-control form-control-lg" id="city" type="text" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="state">State/County</label>
              <input className="form-control form-control-lg" id="state" type="text" />
            </div>
            <div className="col-lg-6 form-group">
              <div className="custom-control custom-checkbox">
                <input className="custom-control-input" id="alternateAddressCheckbox" type="checkbox" />
                <label className="custom-control-label text-small" htmlFor="alternateAddressCheckbox">Alternate billing address</label>
              </div>
            </div>
            <div className="col-lg-12 form-group">
              <button className="btn btn-dark" type="submit">Place order</button>
            </div>
          </div>
        </form>
      )
    }
  }
  const total = () => {
    if (fetchUser) {
      return fetchItemCartApi.map((item, index) => {
        const total = item.price * item.quantity
        return (
          <React.Fragment key={index} >
            <li className="d-flex align-items-center justify-content-between"><strong className="small font-weight-bold">{item.name}</strong><span className="text-muted small"> {nf.format(total)} Vnd </span></li>
            <li className="border-bottom my-2" />
          </React.Fragment>
        )
      })
    }else{
      return fetchItemCart.map((item, index) => {
        const total = item.price * item.quantity
        return (
          <React.Fragment key={index} >
            <li className="d-flex align-items-center justify-content-between"><strong className="small font-weight-bold">{item.name}</strong><span className="text-muted small"> {nf.format(total)} Vnd </span></li>
            <li className="border-bottom my-2" />
          </React.Fragment>
        )
      })
    }
  }
  const subTotal = () => {
    if (fetchUser) {
      return (
        <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{nf.format(subtotalApi)} Vnd</span></li>
      )
    }else{
      return(
        <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{nf.format(subtotal)} Vnd</span></li>
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
                <h1 className="h2 text-uppercase mb-0">Checkout</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="cart.html">Cart</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          {/* BILLING ADDRESS*/}
          <h2 className="h5 text-uppercase mb-4">Billing details</h2>
          <div className="row">
            <div className="col-lg-8">
              {form()}
            </div>
            {/* ORDER SUMMARY*/}
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Your order</h5>
                  <ul className="list-unstyled mb-0">
                    {
                        total()
                    }


                  {
                    subTotal()
                  }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}

export default Checkout;
