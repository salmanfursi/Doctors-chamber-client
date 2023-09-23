import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';


const Signup = () => {
  const { createUser } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photoURL = form.photoURL.value
    console.log(name, email, password,photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          
          console.log("Profile updated successfully");
        }).catch((error) => {
          console.log('Profile give ',error);
        });
      


      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className='font-bold text-center'>Register</h1>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">photoURL</span>
            </label>
            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
          </div>


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value='Sign Up' />
          </div>
        <p>If you have account please<Link to='/register'>Login</Link></p>
        </div>
      </div>
    </form>


  );
};

export default Signup;