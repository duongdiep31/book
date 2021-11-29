import React, { useState } from "react"
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signin } from "../../api/auth";
import { authenticate, isAuthenticate } from "../../ultis";

const resolver = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
            ? {
                email: {
                    type: "required",
                    message: "This is required."
                }
            }
            : {}
    };
};
const Signin =  () => {
    const { register, handleSubmit } = useForm({resolver})
    const navigate = useNavigate();
    const [redirectTo, setRedirecTo] = useState(false);
    const {user} =  isAuthenticate()
    console.log(user);
    const onSubmit = (data) => {
        signin(data)
            .then(response => {
                console.log(response.data);
                authenticate(response.data)
                setRedirecTo(true)
                toast.success("ĐĂng nhập thành công")
            }
            ).catch((error) => toast.error("thất bại"))
    }
    const logingg = () => {
        const responseGoogle = (response) => {
            console.log(response);
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

            console.log(user);
                        if (user.role === '0') {
                            navigate("/admin");
                        } else {
                            navigate("/");
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
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputPassword3">Password</label>
                            <div className="col-sm-10">
                                <input {...register('password', { required: true })} className="form-control" id="inputPassword3" type="password" placeholder="Password" />
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