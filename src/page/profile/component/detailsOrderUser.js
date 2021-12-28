import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getOrder } from "../../../api/orderApi";
import {useTranslation} from 'react-i18next'
const OrderdetailUser = () => {
    const {t} = useTranslation()
    const { id } = useParams();
    const [item, setItem] = useState([])
    const nf = Intl.NumberFormat();
    useEffect(() => {
        const getItem = async () => {
            try {
                const { data } = await getOrder(id)
                console.log('data',data);
                setItem(data)
            } catch (error) {
                console.log(error);
            }
        }
        getItem()
    }, [id])
    const subTotal = () => {
        if (item.arrOrder && Array.isArray(item.arrOrder)) {
            return item.arrOrder.reduce((a, b) => a + b.idBook.price * b.quantity, 0)
        }
    }
    const vat = (subTotal() * 9.3) / 100
    const listOrderDetail = () => {
        if (item.arrOrder && Array.isArray(item.arrOrder)) {
            return item.arrOrder.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <tr >
                            <td>{index + 1}</td>
                            <td>{item.idBook.name}</td>
                            <td>{nf.format(item.idBook.price)} Vnd</td>
                            <td>{item.quantity}</td>
                            <td>{nf.format(item.idBook.price * item.quantity)} Vnd</td>
                        </tr>

                    </React.Fragment>
                )
            })
        }
    }
    return (
        <>
            <div className="content-wrapper" style={{
                marginLeft: '0px'
            }} >
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">

                                {/* Main content */}
                                <div className="invoice p-3 mb-3">
                                    {/* title row */}
                                    <div className="row">
                                        <div className="col-12">
                                            <h4>
                                                <i className="fas fa-book" /> Book Store

                                            </h4>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* info row */}
                                    <div className="row invoice-info">
                                        <div className="col-sm-4 invoice-col">
                                            <address>
                                                <strong>{item.nameKh}</strong><br />
                                                {t('profile.address')}:
                                                {item.address}<br />
                                                {t('profile.name')}: {item.phone}<br />
                                                Email: {item.email}
                                            </address>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">

                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">

                                            <b> {t('profile.code')}:</b> {item._id}<br />
                                            <small style={{
                                                marginRight: '69px',
                                                paddingTop: '20px'
                                            }} className="float-right"> {t('profile.date')}: {item.createdAt}</small>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    {/* Table row */}
                                    <div className="row">
                                        <div className="col-12 table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>{t('profile.name')}</th>
                                                        <th>{t('profile.price')}</th>
                                                        <th>{t('detailPrd.quantity')}</th>
                                                        <th>{t('profile.subtotal')}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {listOrderDetail()}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    <div className="row">
                                        {/* accepted payments column */}
                                        <div className="col-6">
                                            {/* <p className="lead">Payment Methods:</p>
                                            <img src="../../dist/img/credit/visa.png" alt="Visa" />
                                            <img src="../../dist/img/credit/mastercard.png" alt="Mastercard" />
                                            <img src="../../dist/img/credit/american-express.png" alt="American Express" />
                                            <img src="../../dist/img/credit/paypal2.png" alt="Paypal" />
                                            <p className="text-muted well well-sm shadow-none" style={{ marginTop: 10 }}>
                                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                                                plugg
                                                dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                                            </p> */}
                                        </div>
                                        {/* /.col */}
                                        <div className="col-6">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody><tr>
                                                        <th style={{ width: '50%' }}>{t('profile.subtotal')}:</th>
                                                        <td>{nf.format(subTotal())} Vnd </td>
                                                    </tr>
                                                        <tr>
                                                            <th>{t('profile.tax')} (9.3%)</th>
                                                            <td>{nf.format(parseInt(vat))} Vnd</td>
                                                        </tr>
                                                        <tr>
                                                            <th>{t('profile.ship')}:</th>
                                                            <td>$5.80</td>
                                                        </tr>
                                                        <tr>
                                                            <th>{t('profile.total')}:</th>
                                                            <td>{nf.format(subTotal() + vat)} Vnd</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                    {/* this row will not appear when printing */}
                                    <div className="row no-print">
                                        {/* <div className="col-12">
                                            <a href="invoice-print.html" rel="noopener" target="_blank" className="btn btn-default"><i className="fas fa-print" /> Print</a>
                                            <button type="button" className="btn btn-success float-right"><i className="far fa-credit-card" /> Submit
                                                Payment
                                            </button>
                                            <button type="button" className="btn btn-primary float-right" style={{ marginRight: 5 }}>
                                                <i className="fas fa-download" /> Generate PDF
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                                {/* /.invoice */}
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>

        </>
    )
}
export default OrderdetailUser