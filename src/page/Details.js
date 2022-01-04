import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { get } from "../api/product";
import { relatedProductAction } from "../Store/action/products";
import { addtocart } from "../Store/slice/cartSlice";
import { addtocartApi } from "../Store/action/cartAction";
import { toast } from "react-toastify"
import { addtoWishlist, getAllWishlist } from "../Store/action/wishlistAction";
import Views from "./product/component/prdViews";
import { useTranslation } from 'react-i18next'
import { Form, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { createCommentAction, listCommentAction } from "../Store/action/comment";
const Details = () => {
  const { TextArea } = Input;
  const { t } = useTranslation()
  const url = "#productView"
  const dispatch = useDispatch()
  const fetchUser = useSelector((state) => state.auth.auth)
  const comments = useSelector((state) => state.comment.comment)
  useEffect(() => {
    const getListComment = async () => {
      await dispatch(listCommentAction())
    }
    getListComment()

  }, [dispatch])
  const { id } = useParams()
  const [item, setItem] = useState([])
  const nf = Intl.NumberFormat();
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const navigate = useNavigate()
  useEffect(() => {
    const getWish = async () => {
      dispatch(getAllWishlist())
    }
    getWish()
  }, [dispatch])
  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await get(id)
        setItem(data)
      } catch (error) {
      }
    }
    getItem()
  }, [id])
  const related = useSelector((state) => state.product.product)
  useEffect(() => {
    const getRelated = async () => {
      await dispatch(relatedProductAction(id))
    }
    getRelated()
  }, [dispatch, id])
  const listRelated = () => {
    if (related && Array.isArray(related)) {
      return related.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><Link className="d-block" to={`/detail/${item._id}`}><img className="img-fluid w-100" style={
                  {
                    height: '404px'
                  }
                } src={item.image} alt="..." /></Link>
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
                <h6> <Link className="reset-anchor" to={`/detail/${item._id}`}>{item.name}</Link></h6>
                <p className="small text-muted">{nf.format(item.price)} Vnd</p>
              </div>
            </div>

          </React.Fragment>
        )


      })
    }
  }
  const [comment, setComment] = useState("")
  const commentfeature = () => {
    const onHandleChangeComment = (e) => {
      setComment(e.target.value)
    }
    const onHandleSubmitComment = async () => {
      if (fetchUser) {
        const idUser = fetchUser.users._id
        const data = {
          user: idUser,
          productId: id,
          content: comment
        }
        await dispatch(createCommentAction(data))
        setComment("")
        toast.success("Thanks you")
      }
    }
    if (fetchUser) {
      return (
        <>
          <Form.Item>
            <TextArea value={comment} rows={4} onChange={onHandleChangeComment} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={onHandleSubmitComment} type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </>
      )
    } else {
      return (
        <>
          <div style={{
            textAlign: 'center',
            backgroundColor: 'rgb(248, 249, 250)',
            padding: "30px"
          }} >
            <span><Link to='/signin' >{t('comment.form')}</Link></span>
          </div>
        </>

      )
    }
  }
  const listComment = () => {
    const list = comments.list
    if (list && Array.isArray(list)) {
      const filterPrd = list.filter((item) => item.productId._id === id)
      const filterCmt = filterPrd.filter((zz) => zz.status === 1)
      return filterCmt.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="media mb-3">
              {/* <img className="rounded-circle" src="img/customer-1.png" alt={'...'} width={50} /> */}
              <div className="media-body ml-3">
                <h6 className="mb-0 text-uppercase">{item.user.name}</h6>
                <p className="small text-muted mb-0 text-uppercase">{item.createAt}</p>
                {/* <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning" /></li>
                        </ul> */}
                <p className="text-small mb-0 text-muted">{item.content}</p>
              </div>
            </div>
          </React.Fragment>
        )
      })
    }
  }


  return (
    <React.Fragment>
      <Views />
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
                    <span className="small text-uppercase text-gray mr-4 no-select">{t('detailPrd.quantity')}</span>
                    <div className="quantity">
                      <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                      <input className="form-control border-0 shadow-0 p-0" type="text" defaultValue={1} />
                      <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pl-sm-0"><Link className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" onClick={async () => {
                  const product = {
                    ...item,
                    quantity: 1
                  }
                  addtocart(product)
                }} to="#">{t('buttonCart.button')}</Link></div>
              </div><Link className="btn btn-link text-dark p-0 mb-4" to="#"><i className="far fa-heart mr-2" />{t('detailPrd.addtowishlist')}</Link><br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">SKU:</strong><span className="ml-2 text-muted">#{item._id}</span></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Tags:</strong><Link className="reset-anchor ml-2" to="#">Innovation</Link></li>
              </ul>
            </div>
          </div>
          {/* DETAILS TABS*/}
          <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item"><Link onClick={() => {
              const reviews = document.getElementById('reviews')
              const desc = document.getElementById('description')
              reviews.className = 'tab-pane fade '
              desc.className = 'tab-pane fade show active'
            }} className="nav-link active" id="description-tab" data-toggle="tab" to="#description" role="tab" aria-controls="description" aria-selected="true">{t('detailPrd.description')}</Link></li>
            <li className="nav-item"><Link onClick={() => {
              const reviews = document.getElementById('reviews')
              const desc = document.getElementById('description')
              reviews.className = 'tab-pane fade show active'
              desc.className = 'tab-pane fade'
            }} className="nav-link" id="reviews-tab" data-toggle="tab" to="#reviews" role="tab" aria-controls="reviews" aria-selected="false">{t('detailPrd.reviews')}</Link></li>
          </ul>
          <div className="tab-content mb-5" id="myTabContent">
            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
              <div className="p-4 p-lg-5 bg-white">
                <h6 className="text-uppercase">{t('detailPrd.content')} </h6>
                <p className="text-muted text-small mb-0">{item.description}</p>
              </div>
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <div className="p-4 p-lg-5 bg-white">
                <div className="row">
                  <div className="col-lg-8">

                    {listComment()}
                  </div>
                  {commentfeature()}

                </div>
              </div>
            </div>
          </div>
          {/* RELATED PRODUCTS*/}
          <h2 className="h5 text-uppercase mb-4">{t('detailPrd.related')}</h2>
          <div className="row">
            {/* PRODUCT*/}
            {listRelated()}

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default Details