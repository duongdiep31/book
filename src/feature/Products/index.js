import React from 'react';
import { Route, Routes } from 'react-router';
import Addproduct from './component/Addproduct';
import Listproducts from './component/ListProducts';

const ProductIndex = () => {
    return (
        <Routes>
            <Route index element ={<Listproducts/>} />
            <Route path='addprd' element={<Addproduct/>} />
        </Routes>
    );
}

export default ProductIndex;
