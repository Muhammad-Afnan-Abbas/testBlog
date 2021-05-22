import React from 'react';
import './search.css';
import axios from "axios";
class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
      results: {},
      loading: false,
      message: '',
		};
    this.cancel = '';
	}
  handleOnInputChange = (event) => {
    const query = event.target.value;
    if ( ! query ) {
      this.setState({ query, results: {}, message: '' } );
    } else {
      this.setState({ query, loading: true, message: '' }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };
  fetchSearchResults = (updatedPageNo = '', query ) => {
    //const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
    // By default the limit of results is 20
    const searchUrl = `http://localhost:3001/blog/search?${query}`;
    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.hits.length
          ? 'There are no more search results. Please try a new search.'
          : '';
        this.setState({
          results: res.data.hits,
          message: resultNotFoundMsg,
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
    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map((result) => {
            return (
              <a key={result.id} href={result.previewURL} className="result-items">
                <h6 className="image-username">{result.user}</h6>
                <div className="image-wrapper">
                  <img className="image" src={result.previewURL} alt={result.user}/>
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };
	render() {
    //const { query } = this.state;
		return (
			<div>
					<input
						type="search"
						id="search-input"
						placeholder="Search..."
            onChange={this.handleOnInputChange}
					/>
      <div>
      { this.renderSearchResults() }
      </div>
      </div>
			)
	}
}
export default Search;