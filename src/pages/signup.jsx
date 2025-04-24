// // pages/Signup.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';




// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log('Signed up with:', email, password);
//     alert('Signup simulated! 🎉');
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4">Signup</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-3 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };
// <p className="text-sm mt-4 text-center">
//   Already have an account?{' '}
//   <span
//     onClick={() => navigate('/login')}
//     className="text-blue-600 hover:underline cursor-pointer"
//   >
//     Login here
//   </span>
// </p>

// export default Signup;
// pages/Signup.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();  // Declare navigate once

//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log('Signed up with:', email, password);
//     alert('Signup simulated! 🎉');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4">Signup</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-3 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//           Sign Up
//         </button>
//       </form>

//       <p className="text-sm mt-4 text-center">
//         Already have an account?{' '}
//         <span
//           onClick={() => navigate('/login')}
//           className="text-blue-600 hover:underline cursor-pointer"
//         >
//           Login here
//         </span>
//       </p>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Declare navigate once

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signed up with:', email, password);
    alert('Signup simulated! 🎉');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Sign Up
        </button>

        {/* Positioning the "Already have an account?" text below the button */}
        <p className="text-sm mt-4 text-center">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;