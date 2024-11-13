import React, { useContext, useState } from 'react';
import { AuthContext } from '../main';

const SignIn = () => {
    const { handleGooglePopupLogin, handleGithubPopupLogin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignIn = (e) => {
        e.preventDefault();
        // TODO: Implement sign-in with email and password using Firebase auth
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Sign In to Your Account</h2>
                
                {/* Social Login Options */}
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleGooglePopupLogin}
                        className="flex items-center justify-center w-1/2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border rounded hover:bg-gray-200"
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google Logo"
                            className="w-5 h-5 mr-2"
                        />
                        Google
                    </button>
                    <button
                        onClick={handleGithubPopupLogin}
                        className="flex items-center justify-center w-1/2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border rounded hover:bg-gray-200"
                    >
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                            className="w-5 h-5 mr-2"
                        />
                        GitHub
                    </button>
                </div>

                <div className="divider text-gray-400">OR</div>
                
                {/* Email/Password Sign In Form */}
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign In
                    </button>
                </form>

                {/* Additional Links */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signUp" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
