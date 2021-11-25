import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
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
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>
                                    <p>New Orders</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                    <p>Bounce Rate</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>65</h3>
                                    <p>Unique Visitors</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
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
