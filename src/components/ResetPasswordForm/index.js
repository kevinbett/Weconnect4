import React from 'react';
import './style.css';


class ResetPassword extends React.Component {
  
        state = {
        message: undefined
      }

    handleReset = async (event) => {
      event.preventDefault();
      const email = event.target.emailid.value;
      const apiData = await fetch('https://weconnect4-heroku.herokuapp.com/reset-password', {
        method: "POST",
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({
          "email": email

        })
  });

  const res = await apiData.json();
  console.log(res)
  
  if (res.link) {
    window.localStorage.setItem("link", res.link)
    window.location.assign('/newpassword')
  } else
   {
    window.localStorage.setItem("rMessage", res.message)
  }
  this.setState({message: res.message, error: res.error});
}

  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Enter email to reset</h3>
        <form onSubmit= {this.handleReset} >
        <p className="errorMsg">{window.localStorage.getItem("rMessage")}</p>
        <label>Email ID:</label>
        <input type="text" name="emailid" />
        <input type="submit" className="button"  value="Submit"/>
        </form>
    </div>
    
</div>

      );
  }


}


export default ResetPassword;