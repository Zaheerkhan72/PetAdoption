'use client';
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useAppContext from '@/context/AppContext';

const Login = () => {

  const router = useRouter();
  const { setLoggedIn, setCurrentUser } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          if (result.status === 200) {
            toast.success('Login Successful');
            localStorage.setItem('user', JSON.stringify(result.data));
            document.cookie = `token=${result.data.token}`;
            setCurrentUser(result.data);
            setLoggedIn(true);
            router.push('/addpet');
          }
        }).catch((err) => {
          if (err.response.status === 401) {
            toast.error('Invalid Credentials');
          } else {
            toast.error('Failed to login');
          }
        });
    }
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/71/24/4b/71244be4633f4e4656cf6febe91bd4e5.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative  max-w-md mx-auto bg-transparent text-white rounded-xl  p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold ">Sign in</h1>
          <p className="mt-2 text-sm">
            Don&apos;t have an account yet? <a href="/signup" className="text-blue-400 hover:underline">Sign up here</a>
          </p>
        </div>
        <div className="mt-8">
          
          
          {/* Form */}
          <form onSubmit={loginForm.handleSubmit}>
            <div className="space-y-4">
              {/* Form Group */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium ">Email address</label>
                <input
                  type="email"
                  id="email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                  className="mt-1 py-2 text-black px-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium ">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="mt-1 py-2 text-black px-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              {/* End Form Group */}
              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-400 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-200">Remember me</label>
              </div>
              {/* End Checkbox */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-400 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700"
              >
                Sign in
              </button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </div>
  )
}

export default Login;
