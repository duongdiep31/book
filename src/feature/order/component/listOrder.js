import { t } from 'i18next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  listOrderAction } from '../../../Store/action/orderAction';
const ListOrder = () => {
    const order = useSelector((state) => state.order.order)
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
                    return t('listOrder.payment')

                }else{
                    return t('listOrder.bank')

                }
            }
            const status = () => {
                if (item.status === 0) {
                    return t('listOrder.confirm')
                } else if (item.status === 1) {
                    return t('listOrder.shipping')
                } else if (item.status === 2) {
                    return t('listOrder.cancel')
                }else if(item.status === 4){
                    return t('listOrder.wait')
                }
                 else {
                    return t('listOrder.success')
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
                                {t('CRUD.view')}
                            </Link>
                            <Link className="btn btn-info btn-sm" to={`/admin/statusOrder/${item._id}`}>
                                <i className="fas fa-pencil-alt">
                                </i>
                                {t('CRUD.edit')}
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
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/admin">{t('admin.dash')}</Link></li>
                                <li className="breadcrumb-item active">{t('admin.order')}</li>
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
                                        {t('CRUD.name')}
                                    </th>
                                    <th>
                                    {t('CRUD.phone')}
                                    </th>
                                    <th>
                                    {t('CRUD.address')}
                                    </th>
                                    <th>
                                    {t('CRUD.pay')}
                                    </th>
                                    <th>
                                    {t('CRUD.status')}
                                    </th>
                                    <th style={{ width: '20%' }}>
                                    {t('CRUD.action')}
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
