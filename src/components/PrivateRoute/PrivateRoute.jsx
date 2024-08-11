import React, { useState } from 'react'
import { Navigate } from 'react-router'
import {auth, onAuthStateChanged } from "../server/server.js"
import {  } from 'firebase/auth';
import { useEffect } from 'react'
import { user } from '@nextui-org/react';
import Variants from '../Variants/Variants.jsx';

const  PrivateRoute = ({children}) => {

  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  
  


  useEffect(() => {

    
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        // setUserId(user)
        if (user){
          setUid(user.uid)
          // console.log("user id: ", uid);
          
          console.log("user is signned in with user id: ", user.uid);
          
          
        }
        else{
          setUid(null)
          console.log("user is not siggned in");
          
        }
        setLoading(false)
        
      })
      return () => unSubscribe();

  }, []);

  if(loading){
    return <Variants/>
  }

  return uid != null ? children : <Navigate to="/signup"/>;

};

export default PrivateRoute