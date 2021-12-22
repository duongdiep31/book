import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOrderAction } from '../../Store/action/orderAction';
import { itemPrd } from '../../Store/action/products';
import { userList } from '../../Store/action/userAction';
const Dashboard = () => {
    const dispatch = useDispatch()
     const auth = useSelector((state) =>state.auth.auth.users.role)
     const lengthPrd = useSelector((state) => state.product.product)
     useEffect(() => {
        dispatch(itemPrd(
            {
                page: 1,
                limit: 9
            }
        ))
    },[dispatch])
     const lengthUser = useSelector((state) => state.user.user)
     useEffect(() => {
        dispatch(userList({
            page: 1,
            limit: 9
        }))
    },[dispatch])
    const lengthOrder = useSelector((state) => state.order.order)
     useEffect(() => {
        dispatch(listOrderAction())
    },[dispatch])
    const statistical = () => {
                if (auth === 0 || auth === 2) {
                        return(
                            <>
                                <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    {/* <h3>{lengthOrder.length}</h3> */}
                                    <p>New Orders</p>
                                </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                <Link to="/admin/orderadmin" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{lengthPrd.total}<sup style={{ fontSize: 20 }}></sup></h3>
                                    <p>Products</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <Link to="/admin/prdadmin" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{lengthUser.total}</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <Link to="/admin/user" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                       
                            </>
                        )
                }else if (auth === 3) {
                    return(
                        <>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{lengthPrd.length}<sup style={{ fontSize: 20 }}>%</sup></h3>
                                    <p>Products</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <Link to="/admin/prdadmin" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        </>
                    )
                }else {
                    return(
                        <>
                     <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{lengthOrder.length}</h3>
                                    <p>New Orders</p>
                                </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                <Link to="/admin/orderadmin" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        </>
                    )
                }
    }
    return (
        <>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                            {statistical()}
                    </div>
                    {/* /.row */}
                    {/* Main row */}
                    <div className="row">
                        {/* Left col */}
                        <section className="col-lg-7 connectedSortable">
                            {/* Custom tabs (Charts with tabs)*/}
                            <div className="card">

                            </div>
                            {/* /.card */}
                            {/* DIRECT CHAT */}

                            {/*/.direct-chat */}
                            {/* TO DO List */}

                            {/* /.card */}
                        </section>
                        {/* /.Left col */}
                        {/* right col (We are only adding the ID to make the widgets sortable)*/}
                        <section className="col-lg-5 connectedSortable">
                            {/* Map card */}

                            {/* /.card */}
                            {/* solid sales graph */}

                            {/* /.card */}
                            {/* Calendar */}

                            {/* /.card */}
                        </section>
                        {/* right col */}
                    </div>
                    {/* /.row (main row) */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
            </>
    );
}

export default Dashboard;
