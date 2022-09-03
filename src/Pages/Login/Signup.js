import React from 'react';
import { Icon } from '@iconify/react';
import image from "../../Asset/Login/login.png"
import "../../Styles.css/Login/Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
const Signup = () => {

  const navigate = useNavigate()
  const location = useLocation()
  // Google Provider

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


  // Email Password base Create user
  const [createUserWithEmailAndPassword, createUser, createLoading, createError
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // const [token] = useToken(googleUser || createUser)
  const [updateProfile, updating, upError] = useUpdateProfile(auth);
  // React-Hooks Forms
  const { register, formState: { errors }, handleSubmit } = useForm();

  // Handle Firebase Error 
  let errorFirebase;
  if (googleError || createError || upError) {
    errorFirebase = <span className="text-semibold text-red-400">{googleError?.message || createError?.message}</span>
  }
  if (googleLoading || createLoading) {
    return <Loading />
  }
  if (googleUser || createUser) {
    navigate("/")
  }

  // handle From submit
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name });
    toast.success("Your Form Submited Successfully")
  };
  return (
    <div className="container mx-auto my-10  px-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="signup-content">
          <h1>Signup Your Account</h1>
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
                <Icon />
              </div>
            </div>
          </div>
          <div class="divider mt-8 md:px-16">OR</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control mt-10">
              <input type="text"
                placeholder="Enter Name"
                autoComplete='off'
                class="input-feild shadow-md"
                {...register("name",
                  {
                    required: {
                      value: true,
                      message: "Name is required"
                    }
                  })}
              />
              <Icon className="position-name" icon="carbon:user-online" />
              <label class="label">
                {errors.name?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.name?.message}</span>}
              </label>
            </div>
            <div class="form-control">
              <input type="email"
                autoComplete='off'
                placeholder="Enter Email"
                class="input-feild shadow-md"
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
              <label class="text-center">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
              </label>
            </div>
            <div class="form-control">
              <input type="password"
                autoComplete='off'
                placeholder="Enter Password"
                class="input-feild shadow-md"
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
              <label class="text-center">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
              </label>
              <h6 className="text-center font-medium">{errorFirebase}</h6>
            </div>
            <div className="mx-auto w-10/12 mt-6">
              <button type="submit"
                class="signup-button flex justify-center items-center"
                >Signup</button>
              <p className="acount">Already have an account ? <Link className='link-color' to="/login">Please Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;