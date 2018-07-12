import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Paginate from '../pagination'

class RenderBusiness extends Component { 
    handlePageClick = this.handlePageClick.bind(this)
    constructor(props) { 
        super(props);

        this.state = {
            businesses:[],
            currentPage: 1,
            businessesPerPage:8
        };
    }

    DisplayBusiness = (item) =>{

            return (
            <div className="card-deck">
                <div className="card">
                <p className="card-header">{item.name}</p>
                <div className="card-body">
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Type: {item.type}</p>
                <p className="card-text">Location: {item.location}</p>
                <Link to={`/profile/${item.id}`}><button className="btn btn-primary btn-sm btn-block" >See More</button></Link>
                
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

    handlePageClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render (){
        const data = this.state.businesses;
        const indexOfLastBusiness = this.state.currentPage * this.state.businessesPerPage;
        const indexOfFirstBusiness = indexOfLastBusiness - this.state.businessesPerPage;
        const currentBusiness = data.slice(indexOfFirstBusiness, indexOfLastBusiness);
        
        const listBiz=currentBusiness.map(this.DisplayBusiness)
        return (
            <div className="container">
            <div className="row">
                {listBiz}
                <Paginate 
                business = { data }
                handlePageClick={ this.handlePageClick}
                businessesPerPage = {this.state.businessesPerPage}/>
                </div>
                </div>
        )
    }

}



export default RenderBusiness;