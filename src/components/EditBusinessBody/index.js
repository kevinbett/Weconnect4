import React from 'react';
import api  from '../../apiServices/api';
import './style.css';
import swal from 'sweetalert';
import Navigation from '../Navigation';

export const validate = (data) => {
  const errors = {};
  return errors;
 };

class EditBusinessForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      message: undefined,
      data: {
        name: '',
        type: '',
        category: '',
        location: '',
        id: ''
  
      }
    }
  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.location.query) {
      window.location.assign('/viewbusiness');
    }
    const data = this.props.location.query.business;


    this.setState({
      data: {
        ...this.state.data,
        name: data.name,
        category: data.category,
        type: data.type,
        location: data.location,
        id: data.id
      }
    });
  }

  onChange(e) {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      console.log(this.state.data.id)
      api.business.edit(this.state.data.id, this.state.data).then(() => {
      this.props.history.push(`/profile/${this.state.data.id}`);
        
      })
        .catch(err => {
          swal({title:err.response.data.message})
          this.setState({ errors: err.response, loading: false });
        });
    }
  };

  
  render() {
    return (
      <div>
        <Navigation/>
    <div id="main-registration-container">
     <div id="register">
        <h3>Edit Business</h3>
        <form onSubmit={this.onSubmit}>
        <p className="errorMsg">{this.state.message}</p>
        <label>Name</label>
        <input type="text"  onChange={this.onChange} value={this.state.data.name} name="name"  />
        <label>Type:</label>
        <input type="text" onChange={this.onChange} value={this.state.data.type} name="type" />
        <label>category</label>
        <input type="text" onChange={this.onChange} value={this.state.data.category} name="category" />
        <label>Location</label>
        <input type="text" onChange={this.onChange} value={this.state.data.location} name="location" />

        <input type="submit" className="button"  value="Edit Business"/>
        </form>
    </div>
</div>
</div>

      );
  }


}


export default EditBusinessForm;