import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from "react-redux"
import { trendingPrd } from "../../../Store/action/products"
import { addtoWishlist, getAllWishlist } from "../../../Store/action/wishlistAction"
import { toast } from "react-toastify"
import { addtocart } from "../../../Store/slice/cartSlice"
import { addtocartApi } from "../../../Store/action/cartAction"
import { useNavigate } from "react-router"
import { get } from "../../../api/product"
const Trending = () => {
const navigate = useNavigate()
const url = "#productView"
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const trending = useSelector((state) => state.product.product)
  const fetchUser = useSelector((state) => state.auth.auth)
  useEffect(() => {
    const getTrending = async () => {
     await dispatch(trendingPrd())
    }
    getTrending()
  }, [dispatch])
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  useEffect(() => {
    const getWish = async () => {
    await  dispatch(getAllWishlist())
    }
    getWish()
  }, [dispatch])
  const nf = Intl.NumberFormat();
  const listTrending = () => {
      if (trending && Array.isArray(trending)) {
          return trending.map((item, index) => {
            return (
              <React.Fragment key={index} >
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="product text-center">
                    <div className="position-relative mb-3">
                      <div className="badge text-white badge-" /><Link className="d-block" to={`/detail/${item._id}`}><img className="img-fluid w-100" src= {item.image} alt="..." /></Link>
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
                    <h6> <Link className="reset-anchor"to={`/detail/${item._id}`}>{item.name}</Link></h6>
                    <p className="small text-muted">{nf.format(item.price)} Vnd </p>
                  </div>
                </div>

              </React.Fragment>
            )
          })
      }
  }
  return (
    <section className="py-5">
      <header>
        <h2 className="h5 text-uppercase mb-4">{t('trending.top')}</h2>
      </header>
      <div className="row">
        {/* PRODUCT*/}
        {
          listTrending()
        }
      </div>
    </section>
  )
}
export default Trending