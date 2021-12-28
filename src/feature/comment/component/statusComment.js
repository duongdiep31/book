import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { t } from "i18next";
import { commentDetail } from "../../../api/comment";
import { updateCommentAction } from "../../../Store/action/comment";
const StatusComment = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        commentDetail(id)
            .then(response => {
                reset(response.data)
            })
    }, [id, reset])
    const onSubmit = (user) => {
        const data = {
            id: id,
            user: user
        }
        dispatch(updateCommentAction(data))
        navigate("/admin/listcomment", { replace: true })
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
                                <li className="breadcrumb-item"><Link to="/admin">{t('titlePage.comment')}</Link></li>
                                <li className="breadcrumb-item active">{t('CRUD.status')}</li>
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
                                            <option value='0' >{t('comment.wait')}</option>
                                            <option value='1' >{t('comment.comfirm')}</option>
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

export default StatusComment;
