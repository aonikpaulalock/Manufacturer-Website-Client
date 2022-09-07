import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import image from "../../Asset/Login/loginSignup.png"
import auth from '../../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';
const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  // Google Provider

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  // Email Password Authentication
  const [signInWithEmailAndPassword, signUser, signLoading, signError,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(googleUser || signUser)

  // Handle Firebase Error 
  if (googleUser || signUser) {
    navigate(from, { replace: true });
  }
  // useEffect(() => {
  // }, [token, navigate, from])

  let errorFirebase;
  if (googleError || signError) {
    errorFirebase = <span className="text-semibold text-red-400">{googleError?.message || signError?.message}</span>
  }

  if (googleLoading || signLoading) {
    return <Loading />
  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    // console.log(data)
  };
  return (
    <div className="container mx-auto my-10  px-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="signup-image">
          <img src={image} alt="" className="p-6" />
        </div>
        <div className="signup-content">
          <h1>Signin Your Account</h1>
          <div className="social-login">
            <h6>Signup Using Social Networking</h6>
            <div className="social-networking flex items-center justify-center">
              <div className="facebook-icons">
                <Icon className="fb-icon" icon="cib:facebook-f" />
              </div>
              <div className="google-icons mx-4" onClick={() => signInWithGoogle()}>
                <Icon className="g-icon" icon="ant-design:google-plus-outlined" />
              </div>
              <div className="github-icons">
                <Icon className="git-icon" icon="cib:github" />
              </div>
            </div>
          </div>
          <div className="divider mt-8 md:px-16">OR</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input type="email"
                autoComplete='off'
                placeholder="Enter Email"
                className="input-feild shadow-md"
                {...register("email",
                  {
                    required: {
                      value: true,
                      message: "Email is required"
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Enter Valid Email'
                    }
                  })}
              />
              <Icon className="position-email" icon="clarity:email-outline-alerted" />
              <label className="text-center text-lg">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
              </label>
            </div>
            <div className="form-control">
              <input type="password"
                autoComplete='off'
                placeholder="Enter Password"
                className="input-feild shadow-md"
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: "Password is required"
                    },
                    minLength: {
                      value: 6,
                      message: 'Minimum 6 charkter'
                    }
                  })}
              />
              <Icon className="position-password" icon="ri:lock-password-fill" />
              <label className="text-center text-lg">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
              </label>
              <h6 className="text-center font-medium">{errorFirebase}</h6>
            </div>
            <div className="mx-auto w-10/12 mt-6">
              <button type="submit" className="signup-button flex justify-center items-center">Signin</button>
              <p className="text-center font-medium mt-3 cursor-pointer text-md">Forget Password ?</p>
              <p className="acount"> Register Your Account ? <Link className='link-color' to="/signup">Please Signup</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;