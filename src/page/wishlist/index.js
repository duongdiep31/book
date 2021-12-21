import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllWishlist, removeWishlist } from "../../Store/action/wishlistAction"
const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const fetchUser = useSelector((state) => state.auth.auth)
  console.log(fetchUser);
  useEffect(() => {
    const list = async () => {
      await dispatch(getAllWishlist())
    }
    list()
  }, [dispatch])
  const listItem = () => {
    if (fetchUser) {
      const idUser = fetchUser.user._id
      if (wishlist && Array.isArray(wishlist)) {
        const wishlistUser = wishlist.filter(item => item.idUser === idUser)
        return wishlistUser.map((item, index) => {
          return (
            <React.Fragment key={index} >
              <tr>
              <td className="align-middle border-0">
                  <p className="mb-0 small">{index+1}</p>
                </td>
                <th className="pl-0 border-0" scope="row">
                  <div className="media align-items-center"><Link className="reset-anchor d-block animsition-link" to={`/detail/${item.idBook._id}`}><img src={item.idBook.image} alt="..." width="70" /></Link>
                    <div className="media-body ml-3"><strong className="h6"><Link className="reset-anchor animsition-link" to="detail.html">{item.idBook.name}dsds</Link></strong></div>
                  </div>
                </th>
                <td className="align-middle border-0"><Link onClick={() => dispatch(removeWishlist(item.idBook._id))} className="reset-anchor" to="#"><i className="fas fa-trash-alt small text-muted"></i></Link></td>
              </tr>
            </React.Fragment>
          )
        })
      }
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
                <h1 className="h2 text-uppercase mb-0">Wish List</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Wish List</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Wish List</h2>
          <div className="row">
            <div className="col-lg-12 mb-4 mb-lg-0">
              {/* CART TABLE*/}
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">#</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Item</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Action</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    {listItem()}
                  </tbody>
                </table>
              </div>
              {/* CART NAV*/}
              <div className="bg-light px-4 py-3">

              </div>
            </div>
            {/* ORDER TOTAL*/}
          </div>
        </section>
      </div>
    </div>

  )
}
export default Wishlist