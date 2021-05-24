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
   async fetchSearchResults(updatedPageNo = '', query ) {
    //const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
    // By default the limit of results is 20
    const searchUrl = `http://localhost:3001/search?q=${query}`;
    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();
    await axios.get(searchUrl, {
        cancelToken: this.cancel.token,
      }).then((res) => {
        //console.log(res.data)
        const objs = res.data
        console.log("search",objs)
        const obj = JSON.parse(objs)
        
        console.log("json", obj)
        //res.json();
        this.setState({
          results: obj,
          //message: resultNotFoundMsg,
          loading: false,
        });
        console.log("p", this.state.results)
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
      console.log("hahahha",results)
    }
    //const resultnew = JSON.parse(this.state.results)
    // console.log("Query Results",results)
    let temp = results?.map((data, index) => {
      return (
        <div className="results-container" key={index}>
          <div>
          <a className="result-items">
            <h6 className="image-username">{data.title}</h6>
            <div className="image-wrapper">
              <img className="image"/>
            </div>
          </a>
          </div>
        </div>
      )
    });
    return temp;
  }

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