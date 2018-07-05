import React from 'react';
import './style.css';


class NewPasswordForm extends React.Component {
  state = {
    message: undefined
  }

  handleNewPassword = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('authToken');
    let auth_token = 'Bearer ' + token;
    const new_password = event.target.new_password.value;
    const apiData = await fetch(`https://weconnect4-heroku.herokuapp.com//reset-password/${token}`, {
          method: "POST",
          headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': auth_token},
          body: JSON.stringify({
            "new_password": new_password

          })
    });

      const res = await apiData.json();
      console.log(res)
      
      if (res.message === "Password has been successfully changed") {
        window.localStorage.setItem("rMessage", res.message)
        window.location.assign('/login')
      };
      this.setState({message: res.message.message, error: res.error});
    }

  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Enter New Password</h3>
        <form onSubmit= {this.handleNewPassword} >
        <p className="errorMsg">{this.state.message}</p>
        <label></label>
        <input type="password" name="new_password"  />
        <input type="submit" className="button"  value="Submit"/>
        </form>
    </div>
</div>

      );
  }


}


export default NewPasswordForm;