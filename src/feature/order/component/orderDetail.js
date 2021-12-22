import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { getOrder } from "../../../api/orderApi";

const Orderdetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    const nf = Intl.NumberFormat();
    useEffect(() => {
        const getItem = async () => {
            try {
                const { data } = await getOrder(id)
                setItem(data)
            } catch (error) {
                console.log(error);
            }
        }
        getItem()
    }, [id])
    const subTotal = () => {
        if (item.arrOrder && Array.isArray(item.arrOrder)) {
            return item.arrOrder.reduce((a, b) => a + b.idBook.price * b.quantity,0)
        }
    }
    const vat = (subTotal()*9.3)/100
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
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Invoice</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active">Invoice</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
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
                                                <i className="fas fa-globe" /> AdminLTE, Inc.

                                            </h4>
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* info row */}
                                    <div className="row invoice-info">
                                        <div className="col-sm-4 invoice-col">
                                            <address>
                                                <strong>{item.nameKh}</strong><br />
                                                {item.address}<br />
                                                Phone: {item.phone}<br />
                                                Email: {item.email}
                                            </address>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">

                                        </div>
                                        {/* /.col */}
                                        <div className="col-sm-4 invoice-col">

                                            <b>Serial:</b> {item._id}<br />
                                            <small style={{
                                                marginRight: '69px',
                                                paddingTop: '20px'
                                            }} className="float-right">Date: {item.createdAt}</small>
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
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Description</th>
                                                        <th>Subtotal</th>
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
                                            <p className="lead">Amount Due 2/22/2014</p>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody><tr>
                                                        <th style={{ width: '50%' }}>Subtotal:</th>
                                                        <td>{nf.format(subTotal())} Vnd </td>
                                                    </tr>
                                                        <tr>
                                                            <th>Tax (9.3%)</th>
                                                            <td>{nf.format(parseInt(vat))} Vnd</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Shipping:</th>
                                                            <td>$5.80</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total:</th>
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
export default Orderdetail