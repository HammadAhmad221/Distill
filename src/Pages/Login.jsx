import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  return (
    <div className='bg-gray-100 font-space'>
        <div className="bg-[url('/LoginSignupBg.jpg')] h-[150px] flex flex-col gap-4 items-center justify-center">
        <div className="text-center text-white text-4xl font-bold">Login</div>
        <div className="text-center"><span className="text-[#3f3eed] text-base font-normal">Home </span><span className="text-white text-base font-normal">/ Login</span></div>
        </div>
        <LoginForm/>
    </div>
  )
}

export default Login

// Login Form Code
const LoginForm = () => {
        const [agree, setAgree] = useState(false);
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
      
        const handleGoogleSignIn = () => {
          console.log("Google Sign-In clicked");
        };
      
        const handleLogin = (e) => {
          e.preventDefault();
          if (!agree) {
            alert("You must agree to the terms and conditions");
            return;
          }
          console.log("Login form submitted");
        };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="p-6 w-[50vw] max-[1000px]:w-[100vw]">
      <div className="text-center text-[#3f3eed] text-lg font-bold leading-snug">Welcome Back</div>
        <h2 className="text-3xl font-bold text-center mb-10">Login to continue</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-[#11142d] text-md font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3F3EED]"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-[#11142d] text-sm font-bold mb-2">
              Password
            </label>
          <div className='relative'>
          <input
            //   type="password"
            type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3F3EED]"
              placeholder="Enter your password"
              required
            />
        {/* Toggle Button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
        </div>
          </div>
          <div className="text-right text-[#557593] text-sm font-bold mb-3">Forgot password?</div>
                    {/* Checkbox for Terms and Conditions */}
            <div className="mb-8 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <label htmlFor="terms" className="text-[#557593] text-sm font-light">
              I agree to the
            terms and conditions
              of services.
            </label>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#3F3EED] text-white py-2 rounded-md transition duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-[#557593] text-base font-normal leading-tight tracking-tight text-center mt-8">Doesn’t have an account?<a href='/signup' className='text-[#3F3EED]'> Sign up now</a></div>
        {/* Divider */}
        <div className="text-center text-gray-500 my-8">or</div>
        {/* Google Sign-In Button */}
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full text-[#557593] py-2 flex items-center justify-center rounded-lg transition duration-300"
          >
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.1 0 5.4 1.3 6.6 2.5l4.8-4.8C32.6 4.3 28.7 3 24 3 14.4 3 6.9 8.7 4.1 16.6l5.9 4.6C11.7 14 17.3 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.1 24.5c0-1.5-.1-2.6-.3-3.8H24v7.6h12.5c-.5 3-2 5.6-4.3 7.4l5.7 4.4c3.4-3.1 5.3-7.7 5.3-13.2z"
              />
              <path
                fill="#FBBC05"
                d="M9.9 28.2c-1-3-1-6.2 0-9.2L4 14.4C-.4 21.4-.4 30.6 4 37.6l5.9-4.6z"
              />
              <path
                fill="#34A853"
                d="M24 46c4.5 0 8.3-1.5 11.1-4.1l-5.7-4.4c-1.6 1.1-3.6 1.7-5.5 1.7-6.7 0-12.4-4.5-14.4-10.7L4 37.6C7.7 43.4 15.2 46 24 46z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

// export default LoginForm;
