import { auth, createUserWithEmailAndPassword,updateProfile} from "../server/server.js";
import { useNavigate } from "react-router-dom";

export const SignUpProcess = async (displayName, email, password ) => {
    if (typeof(email) != "undefined") {
        console.log(
            "checking type of email in sign up process: ",
            typeof(email)
            
        );
        console.log(
          "checking type of password in sign up process: ",
          typeof(password)
          
      );
        
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      );
      const user = userCredential.user
      const updatedProfile = await updateProfile(user, { displayName });
      if(updatedProfile){
        console.log("profile updated");
      }
      
      return user;
  } catch (error) {
      console.error("Error signing up:", error);
      throw error;
  }
};
