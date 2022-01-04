import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOrder } from "../../../api/orderApi";
import { updateStatusAction } from "../../../Store/action/orderAction";
import { t } from "i18next";

const Statusorder = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        getOrder(id)
            .then(response => {
                reset(response.data)
            })
    }, [id, reset])
    const onSubmit = async (user) => {
        const data = {
            id: id,
            user: user
        }
      await  dispatch(updateStatusAction(data))
        navigate("/admin/orderadmin", { replace: true })
    };
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Project Add</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/admin">{t('admin.dash')}</Link></li>
                                <li className="breadcrumb-item"><Link to="/admin">{t('admin.order')}</Link></li>
                                <li className="breadcrumb-item active">{t('CRUD.role')}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="form-group">
                                        <select  {...register('status', { required: true })} id="inputStatus" className="form-control custom-select">
                                            <option value='2' >{t('listOrder.cancel')}</option>
                                            <option value='4' >{t('listOrder.wait')}</option>
                                            <option value='0' >{t('listOrder.confirm')}</option>
                                            <option value='1' >{t('listOrder.shipping')}</option>
                                            <option value='3' >{t('listOrder.success')}</option>
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <Link to="#" className="btn btn-secondary">{t('CRUD.cancel')}</Link>
                                        <button className="btn btn-success float-right" >{t('CRUD.submit')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}

export default Statusorder;
