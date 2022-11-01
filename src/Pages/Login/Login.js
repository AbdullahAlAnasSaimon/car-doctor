import React from 'react';
import img from '../../assets/images/login/login.svg'

const Login = () => {

  const handleLogin = event =>{
    event.preventDefalut();

  }

  return (
    <div className="hero my-20">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className='w-4/5' src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl my-5 text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login"  className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;