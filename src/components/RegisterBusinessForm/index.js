import React from 'react';
import './style.css';
import swal from 'sweetalert';


class RegisterBusinessForm extends React.Component {
  state = {
    message: undefined
  }

  handleBusinessRegistration = async (event) => {
    event.preventDefault();
    let auth_token = 'Bearer ' + window.localStorage.getItem('authToken')
    const name = event.target.name.value;
    const type = event.target.type.value;
    const category = event.target.category.value;
    const location = event.target.location.value;
    const apiData = await fetch('https://weconnect4-heroku.herokuapp.com/api/v1/businesses/', {
          method: "POST",
          headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': auth_token},
          body: JSON.stringify({
            "name": name,
            "type": type,
            "category": category,
            "location":location

          })
    }).catch(err => { 
      swal({title:err.response.data.message})
          this.setState({ errors: err.response, loading: false });
    })
 
      const res = await apiData.json();
      console.log(res)
      swal({title:res.message})


      

      if (res.message === "Business has been registered successfully") {
        window.localStorage.setItem("rMessage", res.message.message)
        window.location.assign('/viewbusiness')
        
      };
      
      this.setState({message: res.message.message, error: res.message});
      
    }

  render() {
    let message = this.state.message;
    
    // console.log(message)
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Business Registration</h3>
        <form onSubmit= {this.handleBusinessRegistration} >
        <p className="errorMsg">{ message }</p>     
        <label>Name</label>
        <input type="text" name="name"  />
        <label>Type:</label>
        <input type="text" name="type" />
        <label>category</label>
        <input type="text" name="category" />
        <label>Location</label>
        <input type="text" name="location" />

        <input type="submit" className="button"  value="Register Business"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterBusinessForm;