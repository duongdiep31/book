import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./layout/website";
import Shop from "./page/product";
import Homepage from "./page/home";
import Cart from "./page/cart";
import Signup from "./feature/login/Signup";
import Admin from "./layout/admin";
import Dashboard from "./admin/dashboard";
import Listproducts from "./feature/Products/component/ListProducts";
import Addproduct from "./feature/Products/component/Addproduct";
import Listcate from "./feature/Categories/component/Listcate";
import Addcate from "./feature/Categories/component/Addcate";
import Listuser from "./feature/user/component/listuser";
import Changecate from "./feature/Categories/component/changecate";
import Changeprd from "./feature/Products/component/Changeprd";
import Error from "./page/404";
import Role from "./feature/user/component/role";
import PrivateRoute from "./auth/route/privateRoute";
import ProtectedAuth from "./auth/route/protectedAuth";
import ProtectedUser from "./auth/route/protectedUser";
import Checkout from "./page/cart/checkout";
import Details from "./page/Details";
import ListOrder from "./feature/order/component/listOrder";
import Statusorder from "./feature/order/component/statusOrder";
import Orderdetail from "./feature/order/component/orderDetail";
import Indexprofile from "./page/profile";
import Profile from "./page/profile/component/profile";
import Orderstatus from "./page/profile/component/orderStatus";
import SigninUser from "./feature/login/Signin";
import CListPrd from "./page/product/component/listproducts";
import CListPrdDetail from "./page/product/component/listPrdDetail";
import Productsearch from "./page/product/component/productSearch";
import OrderdetailUser from "./page/profile/component/detailsOrderUser";
import Editorderuser from "./page/profile/component/editOrderUser";
import Wishlist from "./page/wishlist";
const Routers = (props) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>loading...</h1>} >
                <Routes>
                    {/* website */}
                    <Route path='/' element={<Website />}   >
                        <Route index element={<Homepage />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='shop' element={<Shop />} >
                                <Route index element={ <CListPrd {...props} />} />
                                <Route path='productCate/:id' element={<CListPrdDetail />} />
                                <Route path='productSearch/:value' element={<Productsearch />} />
                        </Route> 
                        <Route path='signup' element={<ProtectedAuth><Signup /></ProtectedAuth>} />
                        <Route path='signin' element={<ProtectedAuth><SigninUser /> </ProtectedAuth>} />
                        <Route path='/404' element={<Error />} />
                        <Route path='checkout' element={<Checkout />} />
                        <Route path='/detail/:id' element={<Details />} />
                        <Route path='/profile/' element={<Indexprofile />} >
                            <Route index element={<Profile />} />
                            <Route path='orderStatus' element={<Orderstatus />} />
                            <Route path='orderdetailUser/:id' element={<OrderdetailUser />} />
                            <Route  path='editOrderUser/:id' element={<Editorderuser />} />
                        </Route>
                        <Route path='wishlist' element={<Wishlist />} />
                    </Route>
                    {/* admin */}
                    <Route path='/admin/*' element={
                        <PrivateRoute ><Admin /></PrivateRoute>
                    } >
                        <Route index element={<Dashboard />} />
                        <Route path='prdadmin' element={<Listproducts />} />
                        <Route path='addprd' element={<Addproduct />} />
                        <Route path='changeprd/:id' element={<Changeprd />} />
                        <Route path='cateadmin' element={<Listcate />} />
                        <Route path='addcate' element={<Addcate />} />
                        <Route path='changecate/:id' element={<Changecate />} />
                        <Route path='user' element={<ProtectedUser> <Listuser /> </ProtectedUser>} />
                        <Route path='roleuser/:id' element={<ProtectedUser> <Role /> </ProtectedUser>} />
                        <Route path='orderadmin' element={<ListOrder />} />
                        <Route path='orderdetail/:id' element={<Orderdetail />} />
                        <Route path='statusOrder/:id' element={<Statusorder />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
export default Routers