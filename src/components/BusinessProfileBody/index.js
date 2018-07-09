import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api  from '../../api';
import swal from 'sweetalert';
 
class BusinessProfile extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            business:[],
            reviews:[]
        };
    }

    onDelete (item) {
        return () => (api.business.delete(item)
                        .then(res => {
                            console.log("Response test",res)
                            swal(res.data.message)
                            setTimeout(() => {
                                window.location.assign('/viewbusiness')
                            }, 3000)
                        })

                        .catch(err => {swal(err.message)}))
                        
    }

    DisplayBusiness = (item, reviews) => {
            const reviewItems = reviews.map((review, index) => (
                <div>
                    <h5 className="badge badge-secondary" >
                        {review.username}
                    </h5>
                    <div className="">
                <p key={index} className="card-text">{ review.feedback }</p><hr />
                </div>
                </div>
            ));
            return (
            <div className="card-deck2">
                {console.log("kevinbett8888",item.id)}
                <div className="card">
                <p className="card-header">{item.name}</p>
                <div className="card-body">
                <p className="card-text" >Category :{item.category}</p>
                <p className="card-text">Type :{item.type}</p>
                <p className="card-text">Location :{item.location}</p>
                <h2> <span className="badge badge-dark">Reviews</span> </h2>
                { reviewItems }
                {api.is_logged_in_user(item.user_id) ? (
                <span>
                    <Link className="btn btn-space btn-primary float-right btn-sm" to ={{ pathname: "/editbusiness", query: { business: item } }} >Edit</Link>
                    <button className="btn btn-space btn-danger float-right btn-sm" onClick={ this.onDelete(item.id) }>Delete</button>
                </span>
                ) : (
                    <Link className="btn btn-space btn-primary float-right btn-sm" to ={{ pathname: "/addreview", query: { review: item}}} > Add Review</Link>
                )}
                
            </div>  
            </div>
          </div>)
    }
    componentDidMount() { 
  
        axios.get(`https://weconnect4-heroku.herokuapp.com/api/v1/businesses/${this.props.match.params.id}` )
        

        
        .then(response => {

            let b = Object.assign([],response.data);
            const NewBusiness = { 
                    name: b.name,
                    category: b.category,
                    id: b.id,
                    location:b.location,
                    type: b.type,
                    user_id:b.user_id
                }

            const NewState = Object.assign(this.state, { business:NewBusiness} )
            this.setState(NewState)
            console.log(this.state)
        })
        axios.get(`https://weconnect4-heroku.herokuapp.com/api/v1/businesses/${this.props.match.params.id}/reviews` )
        .then(response => {

            const reviews = response.data.reviews.map((review) => (
                { 
                    feedback: review.feedback,
                    username: review.username
                }
            ));
            const NewState = Object.assign(this.state, {reviews: reviews})
            this.setState(NewState)
        });

        
    }
    render (){ 
        const Reviews=this.state.reviews
        const Biz=(this.DisplayBusiness(this.state.business, Reviews))
            return (
                <div className="container">
                <div className="row">
                    {Biz}
                    </div>
                    </div>
            )
        
        
    }

}



export default withRouter(BusinessProfile);