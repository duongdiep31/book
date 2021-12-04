import React, { useState } from "react"
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { authenticate} from "../../ultis";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../Store/action/authAction";
const resolver = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
            ? {
                email: {
                    type: "required",
                    message: "Mail?"
                },
                password: {
                    type: "required",
                    message: "Password?"
                }
            }
            : {}
    };
};
const Signin =  () => {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver})
    const navigate = useNavigate();
    const [redirectTo, setRedirecTo] = useState(false);
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth.auth)
    const loading = useSelector((state) => state.auth.loading)
    const onSubmit = (data) => {
         dispatch(signIn(data))
        toast.success("Successfully")
         setRedirecTo(true)
       
    }
    const logingg = () => {
        const responseGoogle = (response) => {
            authenticate(response.profileObj)
            navigate('/', {replace:true})
        }
        return (
            <GoogleLogin
                clientId='410874282576-2b8g1jq98r2m9056gl5ukq9j54303tq4.apps.googleusercontent.com'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                style={
                    {

                    }
                }
            />
        )
    }
    const userRedirect =  () => {
        if (redirectTo) {
                if (auth) {
                            if (auth.user.role !== '1') {
                                navigate("/admin");
                            }
                             else {
                                navigate("/");
                            }
                        }
           
                            }
    };
    const facebooklogin = () => {
                const componentClicked = (response)=> { console.log('click',response);}
        const responseFacebook = (response) => {console.log('fb',response);}

        return(
        <FacebookLogin 
            appId="870872730277940"
            autoLoad = {false}
             fields="name,email,picture"
             onClick={componentClicked}
             callback={responseFacebook}
 /> )
    }
    return (<div className='container' >
        {userRedirect()}
        <div className="card mb-4" id="forms">
            <div className="card-header">Sign In</div>
            <div className="card-body">

                <div className='container'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">Email</label>
                            <div className="col-sm-10">
                                <input {...register('email', { required: true })} className="form-control" id="inputEmail3" type="email" placeholder="Email" />
                                <p>{errors.email?.message}</p>

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputPassword3">Password</label>
                            <div className="col-sm-10">
                                <input {...register('password', { required: true })} className="form-control" id="inputPassword3" type="password" placeholder="Password" />
                                <p>{errors.password?.message}</p>

                            </div>
                        </div>


                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button className="btn btn-primary" style={{
                                    marginLeft: '932px'
                                }} type="submit">Sign In</button>
                                {logingg()
                                } or   {facebooklogin()}  <br/>
                                <span>Don't have an account? <Link to='/signup' >Sign Up</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}
export default Signin