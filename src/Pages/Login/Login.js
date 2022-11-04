import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    login(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.log(err))
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
              <input type="email" placeholder="email" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />
              <label className="label">
                <Link className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login"  className="btn btn-primary"/>
            </div>
          </form>
          <p className='text-center pb-10'>New to Genius Car? <Link className='text-orange-600 underline' to='/signup'>Create An Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;