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
        // window.location.assign("/");
        return;
      }
    });
  }

//   getToken() {
//     const token = localStorage.getItem("accessToken");
//     if (token == null) {
//       window.localStorage.setItem(
//         "register_message",
//         "Please login to View Your businesses"
//       );
//     //   window.location.assign("/");
//     } else {
//       return token;
//     }
//   }

  render() {
    return (
      <div>
        <div class="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  );
 }
}

export default Logout;