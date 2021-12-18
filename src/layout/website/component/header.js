import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Store/action/authAction";
import { getAllcart } from "../../../api/cartApi";
import Search from "../../../feature/Search";
const Header = () => {
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth.auth)
  const fetchCart = useSelector((state) => state.cart.cart)
  const [cartApi, setcartApi] = useState([])
  const [value, setValue] = useState('')
  useEffect(() => {
    const getApi = async () => {
      const { data } = await getAllcart()
      setcartApi(data)
    }
    getApi()
  }, [])
  const dispatch = useDispatch()
  const lengthCart = () => {
    if (auth) {
      const userID = auth.user
      if (userID) {
        const lengthCartApi = cartApi.filter((item) => item.idUser === userID._id)
        return lengthCartApi.length
      }
    } else {
      return fetchCart.length
    }
  }
  const button = () => {
    if (auth) {
      return <button
        onClick={() => {
          if (typeof window != "undefined") {
            dispatch(logout())
            localStorage.removeItem('persist:root')
            navigate('/', { replace: true })
          }
        }
        }
        style={{
          background: '#f8f9fa',
          border: 'none'

        }} className="nav-link"   >  <i className="   mr-1 text-gray   fas fa-power-off" />   Logout</button>
    }
    else {
      return (<Link className="nav-link" to="/signin"><i className="fas fa-user-alt mr-1 text-gray" />Login</Link>)
    }
  }
  const handleFiltesChange = async (newFilter) => {
    const value = newFilter.searchItem
    setValue(value)
  }
  return (
    <React.Fragment>
      <header className="header bg-white">
        <div className="container px-0 px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <Link className="navbar-brand" to="/">
              <span className="font-weight-bold text-uppercase text-dark"><i className="fas fa-book">Book Store</i></span>
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className='nav-link' to='/' >Home</NavLink>
                </li>
                <li className="nav-item">
                  {/* Link*/}<NavLink className="nav-link" to="shop">Shop</NavLink>
                </li>
                <li className="nav-item">
                  {/* Link*/}<Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  {/* Link*/}<Link className="nav-link" to="/admin">Admin</Link>
                </li>
                <Search onSubmit={handleFiltesChange} data={value} />
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to="cart"> <i className="fas fa-dolly-flatbed mr-1 text-gray" />Cart<small className="text-gray">({lengthCart()})</small></Link></li>
                <li className="nav-item"><Link className="nav-link" to="#"> <i className="far fa-heart mr-1" /><small className="text-gray"> (0)</small></Link></li>
                <li className="nav-item">{button()}</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}
export default Header