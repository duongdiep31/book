import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOrderAction } from '../../../Store/action/orderAction';

const Orderstatus = () => {
    const order = useSelector((state) => state.order.order)
    const user = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        const getOrder = async () => {
            dispatch(listOrderAction())
        }
        getOrder()
    }, [dispatch])
    const listOrderUser = () => {
        if (user) {
            const userId = user.user._id
            if (order && Array.isArray(order) ) {
                const list = order.filter((item) => item.userId === userId)
            return list.map((item, index) => {
                const payMent = () => {
                    if (item.payment === '0') {
                        return 'Thanh Toán Trực Tiếp'
                    } else {
                        return 'Chuyển Khoản'
                    }
                }
                const status = () => {
                    if (item.status === '0') {
                        return 'Đã Xác Nhận'
                    } else if (item.status === '1') {
                        return 'Đang Vận Chuyển'
                    } else if (item.status === '2') {
                        return 'Huỷ'
                    } else if (item.status === '4') {
                        return 'Chờ Xác Nhận'
                    }
                    else {
                        return 'Thành Công'
                    }
                }
                const edit = () => {
                    if (item.status === '0' || item.status === '4') {
                        return (
                            <Link style={{
                                marginLeft: "20px"
                            }} className="btn btn-info btn-sm" to={`/profile/editOrderUser/${item._id}`}>
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </Link>

                        )
                    }
                }
                return (
                    <React.Fragment key={index} >
                        <tr>
                            <td>{index + 1}</td>
                            <td>#{item._id}</td>
                            <td>{payMent()}</td>
                            <td>{status()}</td>
                            <td className="project-actions text-right">
                                <Link className="btn btn-primary btn-sm" to={`/profile/orderdetailUser/${item._id}`}>
                                    <i className="fas fa-folder">
                                    </i>
                                    View
                                </Link>
                                {edit()}
                            </td>
                        </tr>
                    </React.Fragment>
                )
            })
            }
        }
    }
    return (
        <div>
            <div className="card mb-4" id="tables">
                <div className="card-header">Tables</div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style={{
                                    textAlign: 'center'
                                }} >Order Code</th>
                                <th style={{
                                    textAlign: 'center'
                                }}>PayMent</th>
                                <th style={{
                                    textAlign: 'center'
                                }} >Status</th>
                                <th style={{
                                    textAlign: 'center'
                                }} >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrderUser()}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Orderstatus;
