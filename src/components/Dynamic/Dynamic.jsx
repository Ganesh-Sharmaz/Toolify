import { Button } from '@nextui-org/react'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth'

function Dynamic() {

  const auth = getAuth()

  const logOut = () => {

    signOut(auth).then(() => {
      console.log("User has been logged out")
    }).catch((error) => {
      console.log("An error has occured: ", error)
    })
    
  }





  return (
    <>
    <div>Hey I am rendered because you were signed in!</div>
    <Button onPress={logOut}>sign out</Button>
    </>
  )
}

export default Dynamic