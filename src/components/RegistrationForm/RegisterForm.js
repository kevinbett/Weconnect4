import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
  state = {
    message: undefined
  }

  handleUserRegister = async (event) => {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;
    const password = event.target.password.value;
    const apiData = await fetch('https://weconnect4-heroku.herokuapp.com/register', {
          method: "POST",
          headers: {'Accept': 'application/json','Content-Type': 'application/json'},
          body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password

          })
    });

      const res = await apiData.json();
      console.log(res)
      
      if (res.message === "User has been registered successfully") {
        window.localStorage.setItem("register_message", res.message)
        window.location.assign('/login')
      };
      this.setState({message: res.message, error: res.error});
    }

  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
     <div className="errorMsg">{this.state.message}</div>
        <h3>User Registration</h3>
        <form onSubmit= {this.handleUserRegister} >
        <label>Name</label>
        <input type="text" name="username"  />
        <label>Email ID:</label>
        <input type="text" name="emailid" />
        <label>Password</label>
        <input type="password" name="password" />

        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;