import React, { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import '../../../firebase/index'
import { getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "@firebase/storage"
import { getcate } from "../../../api/categories";
import { useDispatch } from "react-redux";
import { changecate } from "../../../Store/action/categories";
import { useTranslation } from 'react-i18next'
const resolver = async (values) => {
    return {
        values: values.name ? values : {},
        errors: !values.name
            ? {
                name: {
                    type: "required",
                    message: "This is required."
                }
            }
            : {}
    };
};
const Changecate = (props) => {
    const { id } = useParams();
    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver });
    const navigate = useNavigate()
    const [image, setimage] = useState('')
    useEffect(() => {
        getcate(id)
            .then(async response => {
                await setimage(response.data.image)
                await reset(response.data)
            })
    }, [id, reset])

    const handleImage = (url) => {
        const storage = getStorage()
        const img = url.target.files[0];
        let storageRef = ref(storage, `categoriesImage/${img.name}`)
        const uploadTask = uploadBytesResumable(storageRef, img);
        uploadBytes(storageRef, img)
            .then(async () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (download) => {
                        await setimage(download)
                    })
            })
    }
    const dispatch = useDispatch()
    const onSubmit = (category) => {
        const zz = { ...category, image }
        dispatch(changecate(zz))
        navigate("/admin/cateadmin", { replace: true })
    };


    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{t('CRUD.edit')}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/admin">{t('admin.dash')}</Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/cateadmin">{t('admin.cate')}</Link></li>
                                <li className="breadcrumb-item active">{t('CRUD.edit')}</li>
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
                                <form onSubmit={handleSubmit(onSubmit)}  >
                                    <div className="form-group">
                                        <label htmlFor="inputName">{t('CRUD.name')}</label>
                                        <input {...register('name', { required: true })} type="text" id="inputName" className="form-control" />
                                        <p>{errors.name?.message}</p>

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="image">{t('CRUD.img')}</label>
                                        <input onChange={handleImage} className="form-control" id="image" type="file" />
                                    </div>
                                    <div>
                                        <img
                                            alt={'...'} style={
                                                {
                                                    width: '20%',
                                                    height: '20%',
                                                    marginBottom: '20px'
                                                }
                                            } src={image} />
                                    </div>
                                    <div className="col-12">
                                        <Link to="#" className="btn btn-secondary">{t('CRUD.cancel')}</Link>
                                        <button disabled={!image} className="btn btn-success float-right">{t('CRUD.submit')}</button>
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

export default Changecate