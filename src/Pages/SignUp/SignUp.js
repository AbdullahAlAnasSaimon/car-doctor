import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="hero my-20">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className='w-4/5' src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-2xl my-5 text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name='name' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn bg-red-500 hover:bg-red-600 text-white border-0" />
            </div>
          </form>
          <p className='text-center pb-10'>Already Have An Account? <Link className='text-orange-600 underline' to='/login'>Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;