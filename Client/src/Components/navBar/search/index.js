import React from 'react';
import './search.css';
import axios from "axios";
class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
      results: [],
      loading: false,
      message: '',
		};
    this.cancel = '';
	}
  handleOnInputChange = (event) => {
    const query = event.target.value;
    console.log("qu", query)
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
        console.log(res) 
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
    // fetch(searchUrl, {
    //     method: "GET",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     }
    // }).then(response => {response.json()
    // console.log(("object,", response))})
    //   .then(obj => {
    //      console.log('Title of the first post: ' + obj[0].title.rendered);
    //      console.log('Content of the first post: ' + obj[0].content.rendered);
    // });
  };
  // resultHanlde = () => {
  //   resultss = fetch(`http://localhost/search?q=${query}`, {
  //     method: "GET",})
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         results : data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }
   renderSearchResults = () => {
    const {results} = this.state;
    if (this.state.results.length > 0) {
      console.log("hahahha",this.state.results[0].title);
    }
    //const resultnew = JSON.parse(this.state.results)
    console.log("Query Results",results)
      return (
        <div className="results-container">
              <div>
              <h1>Hello</h1>
              <a className="result-items">
                <h6 className="image-username">{results.title}</h6>
                <div className="image-wrapper">
                  <img className="image"/>
                </div>
              </a>
              </div>
        </div>
      )
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