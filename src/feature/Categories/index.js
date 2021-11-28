// import React from 'react';
// import { Route, Routes, useMatch } from 'react-router';
// const Addcate = React.lazy(() => import("./component/Addcate"))
// const Editcate = React.lazy(() => import("./component/changecate"))
// const Listcate = React.lazy(()=> import("./component/Listcate"))

// const Indexcategories = (props) => {
//     const {pathname} = useMatch("admin/*")
//     return (
//         <div>
//             <Routes>
//             <Route index element={<Listcate {...props}   />} />
//             <Route path={`${pathname}/addcate`} element={<Addcate onAddcate ={props.onAddcate} />} />
//             <Route  path={`${pathname}/changecate/:id`} element={<Editcate onChangecate = {props.onChangecate} />}  />
//             </Routes>
//         </div>
//     );
// }

// export default Indexcategories;
