import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link , useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const { signin } = useContext(AuthContext)
  const [userEmail,setUserEmail]=useState(null)
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }; 
console.log(location.state);
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password);

    signin(email, password)
      .then((result) => {
        const user = result.user;
        setUserEmail(user.email);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate(from);
      }

  return (
    <form onSubmit={handleSubmit}>
      <div className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className='font-bold text-center'>Login{userEmail}</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name='password' placeholder="password" className="input input-bordered" />
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value='Login' />
        <p>If you are new please <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </form>


  );
};

export default Login;