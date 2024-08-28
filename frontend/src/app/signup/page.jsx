'use client';
import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useAppContext from '@/context/AppContext';

const Signup = () => {
  const router = useRouter();
  const { setLoggedIn, setCurrentUser } = useAppContext();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      axios.post('http://localhost:5000/user/add', values)
        .then((result) => {
          if (result.status === 200) {
            toast.success('Registration Successful');
            localStorage.setItem('user', JSON.stringify(result.data));
            document.cookie = `token=${result.data.token}`;
            setCurrentUser(result.data);
            setLoggedIn(true);
            router.push('/addpet');
          }
        }).catch((err) => {
          toast.error('Registration Failed');
        });
    }
  });

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/fa/ff/c6/faffc6a127fb6d37b674d47e6bff86fc.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-end min-h-screen px-8">
        <div className="max-w-lg bg-transparent text-white rounded-xl p-8 md:p-12 mr-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="mt-2 text-sm">
              Already have an account? <a href="/login" className="text-blue-400 hover:underline">Sign in here</a>
            </p>
          </div>
          <div className="mt-8">
            <form onSubmit={signupForm.handleSubmit}>
              <div className="space-y-4">
                {/* Form Group for Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name}
                    className="mt-1 py-2 text-black px-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                {/* End Form Group */}

                {/* Form Group for Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email address</label>
                  <input
                    type="email"
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                    className="mt-1 py-2 text-black px-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                {/* End Form Group */}

                {/* Form Group for Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                    className="mt-1 py-2 text-black px-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                {/* End Form Group */}

                {/* Form Group for Confirm Password */}
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.confirmPassword}
                    className="mt-1 py-2 text-black px-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                {/* End Form Group */}

                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-400 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-200">I accept the <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a></label>
                </div>
                {/* End Checkbox */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-400 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
