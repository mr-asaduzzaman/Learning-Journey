import { useState, useContext } from 'react';
import { AuthContext } from '../main';
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { handleGooglePopupLogin, handleGithubPopupLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Email/Password login handler
  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log('Logged in with Email/Password:', result.user);
        setError('');
      })
      .catch(error => {
        console.log('Error:', error.message);
        setError('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleEmailPasswordLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login with Email
          </button>
        </form>

        <div className="flex items-center justify-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex flex-col space-y-2">
          <button
            onClick={handleGooglePopupLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>

          <button
            onClick={handleGithubPopupLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-5 h-5 mr-2"
            />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
