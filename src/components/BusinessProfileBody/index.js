import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api  from '../../api';
import { Item } from 'semantic-ui-react';
 
class BusinessProfile extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            business:[],
            reviews:[]
        };
    }

    DisplayBusiness = (item,review) =>{

            return (
            <div className="card-deck2">
                <div className="card">
                <p className="card-header">{item.name}</p>
                <div className="card-body">
                <p className="card-text">Category :{item.category}</p>
                <p className="card-text">Type :{item.type}</p>
                <p className="card-text">Location :{item.location}</p>
                <p className="card-text">Reviews :{review}</p>
                {console.log('WDAEFSDGF', Item)}
                <Link className="btn btn-primary float-right btn-sm" to ={{ pathname: "/editbusiness", query: { business: item } }} >Edit</Link>
                <button className="btn btn-danger float-right btn-sm" onClick={()=>api.business.delete(item.id)}>Delete</button>
                <button className="btn btn-primary float-right btn-sm">Add Review</button>
                {/* <button className="btn btn-primary btn-sm btn-block" to="/">Edit</button> */}
                
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
                    type: b.type
                }

            const NewState = Object.assign(this.state, { business:NewBusiness} )
            this.setState(NewState)
            console.log(this.state)
        })
        axios.get(`https://weconnect4-heroku.herokuapp.com/api/v1/businesses/${this.props.match.params.id}/reviews` )
        .then(response => {

            let b = Object.assign([],response.data.reviews[0]);
            console.log(b)
            const NewReview = { 
                    feedback: b.feedback
                }

            const NewState = Object.assign(this.state, {reviews:NewReview})
            this.setState(NewState)
            console.log(this.state)
            })

        
    }
    render (){ 
        const Reviews=this.state.reviews.feedback
        const Biz=(this.DisplayBusiness(this.state.business,Reviews))
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