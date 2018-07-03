import React, { Component } from 'react';
import axios from 'axios';

class RenderBusiness extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            businesses:[],
        };
    }

    DisplayBusiness = (item) =>{

            return (
            <div className="card-deck">
                <div className="card">
                <p className="card-header">{item.name}</p>
                <div className="card-body">
                <p className="card-text">Category {item.category}</p>
                <p className="card-text">Type {item.type}</p>
                <p className="card-text">Location {item.location}</p>
                <button className="btn btn-primary btn-sm btn-block">Edit</button>
                
            </div>
            </div>
          </div>)
    }
    componentDidMount() { 
        axios.get('https://weconnect4-heroku.herokuapp.com/api/v1/businesses/' )

        
        .then(response => {

            let b = Object.assign([],response.data);
            const NewBusiness = b.businesses.map(biz => {
                return { 
                    name: biz.name,
                    category: biz.category,
                    id: biz.id,
                    location:biz.location,
                    type: biz.type
                }
            }

            )

            const NewState = Object.assign(this.state, {businesses:NewBusiness})
            this.setState(NewState)
            console.log(this.state)
        })
    }
    render (){ 
        const data = this.state.businesses;
        const listBiz=data.map(this.DisplayBusiness)
        return (
            <div className="Business">
            <div className="container row">
                {listBiz}
                </div>
                </div>
        )
    }

}



export default RenderBusiness;