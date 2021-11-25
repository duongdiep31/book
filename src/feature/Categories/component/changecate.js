import React, { useEffect, useState } from "react"
import {useForm, Resolver, SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import '../../../firebase/index'
import{getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "@firebase/storage"
import { getcate } from "../../../api/categories";
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

    const {register, handleSubmit, formState: { errors },reset} = useForm({ resolver });
    const navigate = useNavigate()
    const [image,setimage] = useState('')
        useEffect(() => {
            getcate(id)
            .then(async response => {
                await setimage(response.data.image)
                await reset(response.data)
            })
        },[id,reset])

    const handleImage = (url) => {
        const storage = getStorage()
        const img = url.target.files[0];
        let storageRef = ref(storage, `categoriesImage/${img.name}`)
        const uploadTask = uploadBytesResumable(storageRef, img);
        uploadBytes(storageRef,img)
        .then(async () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then(async (download) => {
            await setimage(download)
          })
        } )                          
}
const onSubmit = (category) => {
    const zz = {...category,image}
    props.onChangecate(zz)    
navigate("/admin/cateadmin" , {replace:true})
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
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active">Project Add</li>
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
                                <h3 className="card-title">General</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <form  onSubmit={handleSubmit(onSubmit)}  >
                                    <div className="form-group">
                                        <label htmlFor="inputName">Name</label>
                                        <input {...register('name', {required:true})}  type="text" id="inputName" className="form-control" />
                                    </div>
                           
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
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
                                        } src= {image} />
                                        </div>
                                    <div className="col-12">
                                        <Link to="#" className="btn btn-secondary">Cancel</Link>
                                        <button disabled={!image}  className="btn btn-success float-right">Submit</button>
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