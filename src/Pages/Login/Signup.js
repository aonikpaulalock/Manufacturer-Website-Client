import React from 'react';
import { Icon } from '@iconify/react';
import image from "../../Asset/Login/login.png"
import "../../Styles.css/Login/Login.css"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Signup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
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
              <div className="google-icons mx-4">
                <Icon className="g-icon" icon="ant-design:google-plus-outlined" />
              </div>
              <div className="github-icons">
                <Icon className="git-icon" icon="cib:github" />
                <Icon />
              </div>
            </div>
          </div>
          <div class="divider mt-8 md:px-16">OR</div>
          <form>
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
              {/* <label class="label">
                {errors.name?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.name?.message}</span>}
              </label> */}
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
              {/* <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.email?.message}</span>}
              </label> */}
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
              {/* <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-400 font-semibold text-md">{errors.password?.message}</span>}
              </label>
              {errorFirebase} */}
            </div>
            <div className="mx-auto w-10/12 mt-6">
              <button type="submit" class="signup-button flex justify-center items-center">Signup</button>
              <p className="acount">Already have an account ? <Link className='link-color' to="/login">Please Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;