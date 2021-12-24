import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllCartApi, removeCart } from '../../Store/action/cartAction'
import { addOrderAction } from '../../Store/action/orderAction';
import {useTranslation} from 'react-i18next'
// const resolver = async (values) => {
//   return {
//     values: values.name ? values : {},
//     errors: !values.name
//       ? {
//           name: {
//             type: "required",
//             message: "Please enter Name"
//           }
//         }
//       : {}
//   };
// };
const Checkout = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const fetchItemCart = useSelector((state) => state.cart.cart)
  const fetchItemCartApi = useSelector((state) => state.cartApi.cartApi)
  const fetchUser = useSelector((state) => state.auth.auth)
  const subtotal = fetchItemCart.reduce((a, b) => a + b.price * b.quantity, 0)
  const nf = Intl.NumberFormat();
  useEffect(() => {
    dispatch(getAllCartApi())
  }, [dispatch])
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [checkPay, setCheck] = useState(0)
  const [status, setStatus] = useState(0)
  const onHandleSubmit = (e) => {
    if (fetchUser) {
      const arr = fetchItemCartApi.filter((item) => item.idUser._id === fetchUser.users._id)
      const subtotalApi = arr.reduce((a, b) => a + b.idBook.price * b.quantity, 0)
      const data = {
        arrOrder: arr,
        ...e,
        userId: fetchUser.users._id,
        status: status,
        totalPrice: subtotalApi,
        payment: checkPay
      }
      return new Promise(resolve => {
        setTimeout(() => {
          dispatch(addOrderAction(data))
          const arr = fetchItemCartApi.filter((item) => item.idUser._id === fetchUser.users._id)
          arr.map((zz) => {
            return dispatch(removeCart(zz._id))
          })
          navigate('/')
          resolve(true)
        }, 2000)
      })
    }
  }
  const check = (e) => {
    setCheck(e.target.value)
    if (e.target.value === '4') {
      setStatus(e.target.value)
    } else {
      setStatus(0)
    }
  }
  const form = () => {
    if (fetchUser) {
      return (
        <form onSubmit={handleSubmit(onHandleSubmit)} className="row">
          <div className="row">
            <div className="col-lg-12 form-group">
              <label className="text-small text-uppercase" htmlFor="name">{t('checkout.name')}</label>
              <input {...register('nameKh', { required: true })} defaultValue={fetchUser.users.name} className="form-control form-control-lg" id="name" type="text" placeholder="Enter your first name" />

            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="email">{t('checkout.email')}</label>
              <input  {...register('email', { required: true })} defaultValue={fetchUser.users.email} className="form-control form-control-lg" id="email" type="email" placeholder="e.g. Jason@example.com" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="phone">{t('checkout.phone')}</label>
              <input  {...register('phone', { required: true })} defaultValue={fetchUser.users.phone} className="form-control form-control-lg" id="phone" type="tel" placeholder="e.g. +02 245354745" />
            </div>

            <div className="col-lg-12 form-group">
              <label className="text-small text-uppercase" htmlFor="address">{t('checkout.address')}</label>
              <input  {...register('address', { required: true })} className="form-control form-control-lg" id="address" type="text" placeholder="House number and street name" />
            </div>
            <div>
              <div className="form-check">
                <input onChange={check} defaultChecked className="form-check-input"
                  onClick={() => {
                    const check = document.getElementById('check')
                    return check.style.display = 'none'
                  }} type="radio" name="flexRadioDefault" defaultValue={2} id="trực tiếp" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                {t('checkout.payment')}
                </label>
              </div>
              <div className="form-check">
                <input onChange={check} defaultValue={4} onClick={() => {
                  const check = document.getElementById('check')
                  return check.style.display = 'block'
                }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                {t('checkout.bank')}
                </label>
                <div id='check' style={{ display: 'none' }}   >
                  <h3>
                    TechComBank<br />
                   DUONG VAN DIEP<br />
                    19037121604010
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12 form-group">
              <button className="btn btn-dark">{t('checkout.confirm')}</button>
            </div>
          </div>
        </form>
      )
    } else {
      return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="row">
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="firstName">First name</label>
              <input  {...register('nameKh', { required: true })} className="form-control form-control-lg" id="firstName" type="text" placeholder="Enter your first name" />
            </div>

            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="email">Email address</label>
              <input  {...register('email', { required: true })} className="form-control form-control-lg" id="email" type="email" placeholder="e.g. Jason@example.com" />
            </div>
            <div className="col-lg-6 form-group">
              <label className="text-small text-uppercase" htmlFor="phone">Phone number</label>
              <input  {...register('phone', { required: true })} className="form-control form-control-lg" id="phone" type="tel" placeholder="e.g. +02 245354745" />
            </div>
            {/* <div className="col-lg-6 form-group">
                      <label className="text-small text-uppercase" htmlFor="country">Country</label>
                      <select className="selectpicker country" id="country" data-width="fit" data-style="form-control form-control-lg" data-title="Select your country" />
                    </div> */}
            <div className="col-lg-12 form-group">
              <label className="text-small text-uppercase" htmlFor="address">Address line</label>
              <input {...register('address', { required: true })} className="form-control form-control-lg" id="address" type="text" placeholder="House number and street name" />
            </div>
            <div>
              <div className="form-check">
                <input onChange={check} defaultChecked className="form-check-input" onClick={() => {
                  const check = document.getElementById('check')
                  return check.style.display = 'none'
                }} type="radio" name="flexRadioDefault" defaultValue={2} id="trực tiếp" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Thanh toán trực tiếp
                </label>
              </div>
              <div className="form-check">
                <input onChange={check} defaultValue={1} onClick={() => {
                  const check = document.getElementById('check')
                  return check.style.display = 'block'
                }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Chuyển Khoản
                </label>
                <div id='check' defaultValue={4} style={{ display: 'none' }}   >
                  <h3>
                    TechComBank<br />
                    Dương Văn Điệp<br />
                    19037121604010
                  </h3>
                </div>
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
      const fetchItemCartUser = fetchItemCartApi.filter((item) => item.idUser._id === fetchUser.users._id)
      return fetchItemCartUser.map((item, index) => {
        const total = item.idBook.price * item.quantity
        return (
          <React.Fragment key={index} >
            <li className="d-flex align-items-center justify-content-between"><strong className="small font-weight-bold">{item.idBook.name}</strong><span className="text-muted small"> {nf.format(total)} Vnd </span></li>
            <li className="border-bottom my-2" />
          </React.Fragment>
        )
      })
    } else {
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
      const fetchItemCartUser = fetchItemCartApi.filter((item) => item.idUser._id === fetchUser.users._id)
      const subtotalApi = fetchItemCartUser.reduce((a, b) => a + b.idBook.price * b.quantity, 0)

      return (
        <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">{t('checkout.total')}</strong><span  >{nf.format(subtotalApi)} Vnd</span></li>
      )
    } else {
      return (
        <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">{t('checkout.total')}</strong><span>{nf.format(subtotal)} Vnd</span></li>
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
                <h1 className="h2 text-uppercase mb-0">{t('titlePage.checkout')}</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><a href="/">{t('titlePage.home')}</a></li>
                    <li className="breadcrumb-item"><a href="/cart">{t('titlePage.cart')}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{t('titlePage.checkout')}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          {/* BILLING ADDRESS*/}
          <h2 className="h5 text-uppercase mb-4">{t('checkout.bill')}</h2>
          <div className="row">
            <div className="col-lg-8">


              {form()}

            </div>
            {/* ORDER SUMMARY*/}
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">{t('checkout.yourOrder')}</h5>
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
