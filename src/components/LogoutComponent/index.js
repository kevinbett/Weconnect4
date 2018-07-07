import React from "react";

class Logout extends React.Component {

  componentDidMount() {
    let auth_token = 'Bearer ' + window.localStorage.getItem('authToken')
    fetch("https://weconnect4-heroku.herokuapp.com/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': auth_token
      }
    }).then(response => {
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