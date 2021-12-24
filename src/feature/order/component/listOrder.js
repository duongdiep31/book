import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  listOrderAction } from '../../../Store/action/orderAction';
const ListOrder = () => {
    const order = useSelector((state) => state.order.order)
    console.log(order)
    const dispatch = useDispatch()
    useEffect(() => {
        const list = async () => {
       await dispatch(listOrderAction())
        }
        list()
    }, [dispatch])
    let Result
    const list = order.list
    if (list && Array.isArray(list)) {
        Result = list.map((item, index) => {
            const payMent = () => {
                if (item.payment === 0) {
                    return 'Thanh Toán Trực Tiếp'
                }else{
                    return 'Chuyển Khoản'
                }
            }
            const status = () => {
                if (item.status === 0) {
                    return 'Đã Xác Nhận'
                } else if (item.status === 1) {
                    return 'Đang Vận Chuyển'
                } else if (item.status === 2) {
                    return 'Huỷ'
                }else if(item.status === 4){
                    return 'Chờ Xác Nhận'
                }
                 else {
                    return 'Thành Công'
                }
            }
            return (
                <React.Fragment key={index} >
                    <tr>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {item.nameKh}
                        </td>
                        <td>
                            {item.phone}
                        </td>
                        <td>
                            {item.address}
                        </td>
                        <td>
                            {payMent()}
                        </td>
                        <td>
                            {status()}
                        </td>
                        <td className="project-actions text-right">
                        <Link className="btn btn-primary btn-sm" to={`/admin/orderdetail/${item._id}`}>
                                <i className="fas fa-folder">
                                </i>
                                View
                            </Link>
                            <Link className="btn btn-info btn-sm" to={`/admin/statusOrder/${item._id}`}>
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </Link>
                        </td>
                    </tr>
                </React.Fragment>
            )
        })
    }
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Projects</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active">Projects</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                {/* Default box */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Projects</h3>
                        <div className="card-tools">
                        

                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped projects">
                            <thead>
                                <tr>
                                    <th style={{ width: '1%' }}>
                                        #
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Name
                                    </th>
                                    <th>
                                        Phone
                                    </th>
                                    <th>
                                        Address
                                    </th>
                                    <th>
                                        Payment
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Result}

                            </tbody>
                        </table>

                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </section>
        </>
    );
}

export default ListOrder;
