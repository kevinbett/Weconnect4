import React from 'react';

class Paginate extends React.Component { 
    render () {

        const pageNumbers = [];

        for (
            let i = 1;
            i <= Math.ceil(this.props.business.length / this.props.businessesPerPage);
            i++
          ) {
            pageNumbers.push(i);
          }
      
          const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li class="page-item" key={number}>
                <div class="page-link" 
                id={number}
                onClick={this.props.handlePageClick}>
                {number}
                </div>
                </li>
            );
          });

        return(
            <div className="center">
            <nav aria-label="Page navigation example">
                <ul class="pagination center">
                    <li class="page-item"><a class="page-link" href="">Previous</a></li>
                    {renderPageNumbers}
                    <li class="page-item"><a class="page-link" href="">Next</a></li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Paginate;