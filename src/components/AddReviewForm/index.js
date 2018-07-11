import React from 'react';
import api  from '../../apiServices/api';
import './style.css';
import swal from 'sweetalert';
import Navigation from '../Navigation';

export const validate = (data) => {
  const errors = {};
  return errors;
 };

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      message: undefined,
      data: {
        feedback:'',
        id: ''
  
      }
    }
  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount() {
    if (!this.props) {
      window.location.assign('/viewbusiness');
    }


    const data = this.props.location.query;

    this.setState({
        data: {
          ...this.state.data,
          id: data.review.id
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
      api.business.review(this.state.data.id, this.state.data).then(() => {
      this.props.history.push(`/profile/${this.state.data.id}`);
        swal('review added succesfully', 'success')
      })
        .catch(err => {
          swal({title:err.response.data.message})
          this.setState({ errors: err.response, loading: false });
          this.props.history.push(`/profile/${this.state.data.id}`)
        });
    }
  };

  
  render() {
    return (
        <div>
        <Navigation/>
    <div id="main-registration-container">
     <div id="register">
        <h3>Enter your Review</h3>
        <form onSubmit={this.onSubmit}>
        <p className="errorMsg">{this.state.message}</p>
        <label>Review</label>
        <input type="text"  onChange={this.onChange} value={this.state.data.feedback} name="feedback"  />

        <input type="submit" className="button"  value="Submit Review"/>
        </form>
    </div>
</div>
</div>

      );
  }


}


export default AddReviewForm;