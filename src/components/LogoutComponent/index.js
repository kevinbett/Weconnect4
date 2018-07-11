import React from "react";
import { weConnectLogout } from "../../api";

class Logout extends React.Component {

  componentDidMount() {
    let auth_token = 'Bearer ' + window.localStorage.getItem('authToken')
    weConnectLogout(auth_token).then(response => {
      if (response.status === 200) {
        localStorage.clear();
        window.location.assign("/");
        return;
      }
    });
  }


  render() {
    return (
      <div>
        <div class="loader" id="loader-2">
        </div>
      </div>
  );
 }
}

export default Logout;