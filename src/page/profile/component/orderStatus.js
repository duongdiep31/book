import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOrderAction } from '../../../Store/action/orderAction';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next'

const Orderstatus = () => {
    const { t } = useTranslation()
    const [page, setPage] = useState({
        page: 1,
        limit: 9
    })
    const order = useSelector((state) => state.order.order)
    const user = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        const getOrder = async () => {
            dispatch(listOrderAction(page))
        }
        getOrder()
    }, [dispatch,page])
    const listOrderUser = () => {
        if (user) {
            const userId = user.users._id
            const listOrder = order.list
            if (listOrder && Array.isArray(listOrder)) {
                const list = listOrder.filter((item) => item.userId === userId)
                return list.map((item, index) => {
                    const payMent = () => {
                        if (item.payment === 0) {
                            return 'Thanh Toán Trực Tiếp'
                        } else {
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
                        } else if (item.status === 4) {
                            return 'Chờ Xác Nhận'
                        }
                        else {
                            return 'Thành Công'
                        }
                    }
                    const edit = () => {
                        if (item.status ===0 || item.status === 4) {
                            return (
                                <Link style={{
                                    marginLeft: "20px"
                                }} className="btn btn-info btn-sm" to={`/profile/editOrderUser/${item._id}`}>
                                    <i className="fas fa-pencil-alt">
                                    </i>
                                    {t('profile.edit')}
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
                                        {t('profile.view')}
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
    const handlePageClick = (data) => {
        setPage({
            page: data.selected + 1,
            limit: 9
        }
        )
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
                                }} >{t('profile.code')}</th>
                                <th style={{
                                    textAlign: 'center'
                                }}>{t('profile.pay')}</th>
                                <th style={{
                                    textAlign: 'center'
                                }} >{t('profile.status')}</th>
                                <th style={{
                                    textAlign: 'center'
                                }} >{t('profile.action')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrderUser()}

                        </tbody>
                    </table>

                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(order.total / page.limit)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination justify-content-center justify-content-lg-end'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        nextClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />

                </div>
            </div>

        </div>
    );
}

export default Orderstatus;
