import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
const Indexprofile = () => {
    return (
        <div>
            <div className='container' >
                <div className="row">
                    <div className="col-3">
                        <div className="card">

                            <h4 className="card-header">Menu</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link className="nav-link" to="orderStatus">Order Status</Link>
                                </li>
                            </ul>
                            <div />
                        </div>
                    </div>
                    <div className="col-9">
                        {/* info */}
                        {<Outlet />}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Indexprofile;
