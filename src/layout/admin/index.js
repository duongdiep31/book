import React from 'react';
import { Outlet } from 'react-router';
import Footer from './component/footer';
import Header from './component/header';

const Admin = () => {
    return (
                 <>
                <div  className='wrapper' >

                           <Header/>
        <div className="content-wrapper">

                           <Outlet />
                           </div>
                            <Footer />
                </div>
   
        
        
        
               </>
    );
}

export default Admin;
