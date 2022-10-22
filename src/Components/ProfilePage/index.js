import React from 'react'
import{ useHistory} from "react-router-dom";
function Profile() {
    const history = useHistory();
    const goToSignIn = () => {
        history.push("/home");
    }
  return (
    <div>Profile
        <button onClick={goToSignIn}>Login</button>
    </div>
  )
}

export default Profile