import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGpt } from "../utils/gptSlice";
import { changelang } from "../utils/config";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgpt = useSelector((store) => store.gpt.showGptSearch);

  const handleToggle = () => {
    console.log("abc");
    dispatch(toggleGpt());
  };

  const handlelanguage = (e) => {
    dispatch(changelang(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error") build error
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browser");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className=' flex curser-pointer  bg-gradient-b  '>
        <img
          className=' h-10 '
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo'
        />
        <div className='flex h-10   '>
          {user && (
            <>
              <select
                className='bg-yellow text-blacl'
                onChange={handlelanguage}
              >
                <option value='en'>English</option>
                <option value='hindi'>Hindi</option>
                <option value='spanish'>Spanish</option>
              </select>
              <button
                onClick={handleToggle}
                className='bg-purple-500 rounded-sm w-27'
              >
                {" "}
                {showgpt ? "Home Page" : "GPT seach"}
              </button>
              {user.displayName ? (
                <h4 className='py-10'>{user.displayName}</h4>
              ) : (
                <img
                  className=' '
                  alt='foto'
                  src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                />
              )}

              <button className='text-black ' onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
