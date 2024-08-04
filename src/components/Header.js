import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
  })
  .catch((error) => {
    navigate("/error");
  });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        const {uid, email, displayName, photoURL}  = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
      })
    );
    navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // navigate("/gptsearch");
    dispatch(toggleGptSearchView());
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      
      <img 
      className='w-44'
      src={LOGO} 
      alt="logo"/>
   {
   user &&(
    <div className='flex p-2'>
      <button className='bg-purple-600 px-4 py-1 mx-2 rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
          <img alt="usericon" className='w-12 h-12' src={user?.photoURL} />
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>
    )}
    </div>


  );
};

export default Header