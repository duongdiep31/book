
// import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { getAllcate, insertcate, removecate, updatecate } from './api/categories';
import './App.css';
// import {getAll, insert, remove, update} from './api/product'
import Routers from './Routers';

function App() {
//   const [products, setProducts] = useState([])
//   const [categories, setCategories] = useState([])

//   useEffect(() => {
//     const getProducts = async  () => {
//       try {
//         const {data: products} = await getAll()
        
//         setProducts(products)
//       }catch(error){
//           console.log(error)
//       }
//     }
//     getProducts()
//   },[])

//   const onHandleAddprd = (product) => {
//           try {
//                 insert(product).then((response) => {
//                       setProducts([...products, response.data])
//                       toast.success('Thêm Sản Phẩm Thành Công')
//                 })
//           } catch (error) {
//             toast.error('Thêm Sản Phẩm Thất Bại')
//           }              
//   }

//   const onHandleRemoveprd = (id) => {
            
//         remove(id)
//         try { 
//         setProducts(products.filter(item => item.id !== id))
//             toast.success('Xoá Thành Công')
          
//         } catch (error) {
//             toast.error('Xoá không thành công')
//         }
//   }
//   const onHandleChangeprd = (product) => {
//     try {
//         update(product.id,product)
//       .then((response) => {
//         console.log(response);
//         const newprd = products.data.map(item => item.id === response.data.book.id ? response.data : item)
//         setProducts(newprd)
//         toast.success('Sửa thành công')
//       }  )
//   } catch (error) {
//     toast.error('Thất Bại')
//   }
          
//   }
// ///Category
//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const {data: categories} = await getAllcate()
//         setCategories(categories)
//       } catch (error) {
//           console.log(error);
//       }
//     }
//     getCategories()
//   },[])
//   const onHandleAddcate = (category) => {
//     console.log(category);
//           try {
//             insertcate(category).then((response) => {
//               setCategories([...categories, response.data]);
//               toast.success("Thêm danh mục thành công")
//             });
//           } catch (error) {
//                 toast.error('Không thành công')
//           }
    
//   };
//   const onHandleRemove = (id) => {
//     try {
//       removecate(id)
//       setCategories(categories.filter(item =>item.id !== id))
//       toast.success('Xoá thành công')
//     } catch (error) {
//           toast.error('Xoá không thành công')
//     }
  
//   };
//   const onHandleChange = (category ) => {
            
//         try {
//             updatecate(category.id,category)
//             .then((response) => {
//               const newcate = categories.map(item => item.id === response.data.id ? response.data : item)
//               setCategories(newcate)
//               toast.success('Sửa thành công')
//             }  )
//         } catch (error) {
//           toast.error('Thất Bại')
//         }
        
//   }


  return (
    <>
    <Routers
        // products= {products}
        // cate={categories}
        // onAddcate = {onHandleAddcate}
        // onremovecate = {onHandleRemove}
        // onChangecate = {onHandleChange}
        // onAddprd = {onHandleAddprd}
        // onRemoveprd = {onHandleRemoveprd}
        // onHandleChangeprd = {onHandleChangeprd}
    />
        <ToastContainer/>
</>
  );
}

export default App;
