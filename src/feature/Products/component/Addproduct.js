import React, { useState } from "react"
import {useForm, Resolver, SubmitHandler} from 'react-hook-form'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import '../../../firebase/index'
import{getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "@firebase/storage"

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

const Addproduct = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm({ resolver });
    const navigate = useNavigate()
    const [image,setimage] = useState('')
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
const onSubmit = (product) => {
    const zz = {...product,image}
    props.onAddprd(zz)    
navigate("/admin/prdadmin" , {replace:true})
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
                                <li className="breadcrumb-item active">Category Add</li>
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
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text" {...register('name', {required:true})} id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputStatus">Categories</label>
                                        <select  {...register('category', {required:true})} id="inputStatus" className="form-control custom-select">
                                                        <option/>
                                                    {props.categories.map((item,index)=>{
                                                            return(
                                                                <React.Fragment
                                                                    key={index}
                                                                >
                                                                <option value={item.id} >{item.name}</option>
                                                                </React.Fragment>
                                                            )
                                                        })
                                                    }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputStatus">Status</label>
                                        <select {...register('status', {required:true})} id="inputStatus" className="form-control custom-select">
                                            <option value='Còn Hàng' >Còn Hàng</option>
                                            <option value='Hết Hàng'   >Hết Hàng</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputClientCompany">Price</label>
                                        <input   {...register('price', {required:true})} type="text" id="inputClientCompany" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputProjectLeader">Author</label>
                                        <input  {...register('author', {required:true})} type="text" id="inputProjectLeader" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputDescription">Description</label>
                                        <textarea   {...register('description', {required:true})} id="inputDescription" className="form-control" rows={4} defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input onChange={handleImage} className="form-control" id="image" type="file" />
                                    </div>
                                    <div className="col-12">
                                        <Link to="#" className="btn btn-secondary">Cancel</Link>
                                        <button disabled={!image} className="btn btn-success float-right" >Submit</button>
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

export default Addproduct;
