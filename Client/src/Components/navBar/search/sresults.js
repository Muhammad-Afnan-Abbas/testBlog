import React, { Component } from 'react';
class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    fetchSearchResults = (updatedPageNo = '', query ) => {
        //const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        // By default the limit of results is 20
        const searchUrl = `http://localhost:3001/search?q=${query}`;
        if (this.cancel) {
          // Cancel the previous request before making a new request
          this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        axios.get(searchUrl, {
            cancelToken: this.cancel.token,
          }).then((res) => {
            //res.json();
            //const resultNotFoundMsg = !res.data.hits.length
            this.setState({
              results: res.data,
              //message: resultNotFoundMsg,
              loading: false,
            });
          })
          .catch((error) => {
            if (axios.isCancel(error) || error) {
              this.setState({
                loading: false,
                message: 'Failed to fetch results.Please check network',
              });
            }
          });
      };


    renderSearchResults = () => {
        const {results} = this.state;
        console.log("Query Results",results)
        if (Object.keys(results).length && results.length) {
          return (
            <div className="results-container">
              {Object.keys(results).map((result) => {
                return (
                  <a key={result._id} className="result-items">
                    <h6 className="image-username">{result.title}</h6>
                    <div className="image-wrapper">
                      <img className="image" src={result.file} alt={result.title}/>
                    </div>
                  </a>
                );
              })}
            </div>
          );
        }
      };

    render() { 
        return (  
            <div>
            { this.renderSearchResults() }
            </div>
        );
    }
}
 
export default SearchResults;