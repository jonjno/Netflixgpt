import React, { useRef, useState } from "react";
import Header from "./header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [issignIn, setisSignin] = useState(true);
  const [errmsg, seterrmsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglesign = () => {
    setisSignin(!issignIn);
  };

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    seterrmsg(msg);
    // console.log(msg);
    // console.log(email.current.value);
    // console.log(password.current.value);

    if (msg) return;
    if (!issignIn) {
      //  signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          navigate("/browser");
          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + errorMessage);
        });
    } else {
      // signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browser");
          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
          alt='logo'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg  bg-black bg-opacity-40'
      >
        <h1 className='font-bold text-3xl py-4 px-4'>
          {" "}
          {issignIn ? "Sign In " : "Sign Up"}
        </h1>
        {!issignIn && (
          <input
            ref={name}
            className='p-4 my-4 w-full bg-gray-200'
            type='name'
            placeholder='Full Name'
          />
        )}

        <input
          ref={email}
          className='p-4 my-4 w-full bg-gray-200'
          type='text'
          placeholder='Email Address'
        />
        <input
          ref={password}
          className='p-4 my-4 w-full bg-gray-200'
          type='text'
          placeholder='Password'
        />
        <p className='text-red-600'>{errmsg}</p>
        <button
          className='py-4 my-6 bg-red-700 w-full rounded-lg'
          type='submit'
          onClick={handleButtonClick}
        >
          {issignIn ? "Sign In " : "Sign Up"}
        </button>
        <p className='py-2 px-8 cursor-pointer' onClick={togglesign}>
          {issignIn
            ? " New to netflix? Sign Up Now "
            : "Alraedy registered user"}
        </p>
      </form>
    </div>
  );
};

export default Login;
