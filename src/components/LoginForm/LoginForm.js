import React from 'react';
import './style.css';


class LoginForm extends React.Component {
  
        state = {
        message: undefined
      }

    handleUserLogin = async (event) => {
      event.preventDefault();
      const email = event.target.emailid.value;
      const password = event.target.password.value;
      const apiData = await fetch('https://weconnect4-heroku.herokuapp.com/login', {
        method: "POST",
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({
          "email": email,
          "password": password

        })
  });

  const res = await apiData.json();
  console.log('3swdefrgthyju',res)
  
  if (res.message === "You are now logged in as kevin bett") {
    window.localStorage.setItem("rMessage", res.message)
    window.location.assign('/')
  };
  this.setState({message: res.message, error: res.error});
}

  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>User Login</h3>
        <form onSubmit= {this.handleUserLogin} >
        <p className="errorMsg">{window.localStorage.getItem("rMessage")}</p>
        <label>Email ID:</label>
        <input type="text" name="emailid" />
        <label>Password</label>
        <input type="password" name="password" />

        <input type="submit" className="button"  value="Login"/>
        </form>
        
    </div>
</div>

      );
  }


}


export default LoginForm;