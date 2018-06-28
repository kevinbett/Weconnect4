import React from 'react';
import './style.css';


class RegisterBusinessForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        fields: {},
        errors: {},
        name: {},
        type:{},
        category:{},
        locaton:{}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegisterBusinessForm = this.submituserRegisterBusinessForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegisterBusinessForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["name"] = "";
          fields["type"] = "";
          fields["category"] = "";
          fields["location"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your Business Name.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["type"]) {
        formIsValid = false;
        errors["type"] = "*Please enter the type of your business.";
      }

      if (typeof fields["type"] !== "undefined") {
        if (!fields["type"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["type"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["category"]) {
        formIsValid = false;
        errors["category"] = "*What is your Business category?.";
      }

      if (typeof fields["category"] !== "undefined") {
        if (!fields["category"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["category"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["location"]) {
        formIsValid = false;
        errors["location"] = "*Please enter the location of your business.";
      }

      if (typeof fields["location"] !== "undefined") {
        if (!fields["location"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["location"] = "*Please enter alphabet characters only.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }

  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Business Registration</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegisterBusinessForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.name} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.name}</div>
        <label>Type:</label>
        <input type="text" name="emailid" value={this.state.fields.type} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.type}</div>
        <label>Category</label>
        <input type="password" name="password" value={this.state.fields.category} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.category}</div>
        <label>Location</label>
        <input type="password" name="password" value={this.state.fields.location} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.location}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterBusinessForm;