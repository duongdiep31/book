import React, { Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Website from "./layout/website";
import Shop from "./page/product";
import Homepage from "./page/home";
import Cart from "./page/cart";
import Signup from "./feature/login/Signup";
import Signin from "./feature/login/Signin";
import Admin from "./layout/admin";
import Dashboard from "./admin/dashboard";
import Listproducts from "./feature/Products/component/ListProducts";
import Addproduct from "./feature/Products/component/Addproduct";
import Listcate from "./feature/Categories/component/Listcate";
import Addcate from "./feature/Categories/component/Addcate";
import Listuser from "./feature/user/component/listuser";
import Changecate from "./feature/Categories/component/changecate";
import Changeprd from "./feature/Products/component/Changeprd";
const Routers = (props) => {
        return (
            <BrowserRouter>
                    <Suspense fallback={<h1>loading...</h1>} >
                        <Routes>
                            {/* website */}
                            <Route path='/' element={<Website/>}   >
                            <Route  index element={<Homepage {...props} />} />
                                <Route  path ='cart' element={<Cart />} />
                            <Route  path='shop' element={<Shop {...props} />} />
                            <Route path='signup' element={<Signup />}  /> 
                            <Route path ='signin' element={<Signin />}  />

                            </Route>
                            {/* admin */}
                            <Route path='/admin/' element={<Admin/>} >
                                    <Route index  element={<Dashboard />} /> 
                                    <Route path='prdadmin' element={<Listproducts {...props}  />} />
                                    <Route path='addprd' element={<Addproduct{...props} />}  />
                                    <Route path='changeprd/:id' element={<Changeprd {...props} />} />
                                    <Route path='cateadmin' element={<Listcate {...props}   />} />
                                    <Route path='addcate' element={<Addcate onAddcate ={props.onAddcate} />} />
                                    <Route  path='changecate/:id' element={<Changecate onChangecate = {props.onChangecate} />}  />
                                    <Route path='user' element={<Listuser/>} />
                            </Route>





                        </Routes>
                    </Suspense>

            </BrowserRouter>
        )


}
export default Routers