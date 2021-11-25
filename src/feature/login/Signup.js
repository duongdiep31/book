import React from "react"
import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast} from "react-toastify";
import { signup } from "../../api/auth";
import "react-toastify/dist/ReactToastify.css";




const Signup = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

        const onSubmit = (user) => {
            console.log(user);
                    signup(user)
                                .then(response => {
                                    console.log(response);
                                    toast.success('Đăng kí thành công') 
                                    navigate("/signin", {replace:true})
                                }
                                 ).catch((error) => toast.error(error.response))
                    }


                  
    return (
        <div className='container' >
            <div className="card mb-4" id="forms">
                <div className="card-header">Sign Up</div>
                <div className="card-body">
                    <div className='container'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">Name</label>
                            <div className="col-sm-10">
                                <input {...register('name', {required: true})} className="form-control" id="inputEmail3" type="text" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">Email</label>
                            <div className="col-sm-10">
                                <input {...register('email', {required: true})} className="form-control" id="inputEmail3" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">Phone</label>
                            <div className="col-sm-10">
                                <input {...register('phone', {required: true})} className="form-control" id="inputEmail3" type="name" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputPassword3">Password</label>
                            <div className="col-sm-10">
                                <input {...register('password', {required: true})} className="form-control" id="inputPassword3" type="password" placeholder="Password" />
                            </div>
                        </div>


                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button  className="btn btn-primary" style={{
                                    marginLeft: '932px'
                                }} type="submit">Sign up</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Signup