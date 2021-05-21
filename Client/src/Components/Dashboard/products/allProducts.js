import React, { Component } from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";

import './allProducts.css'
class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            products: [],
        }
    }
    getSellerProducts(){
        const jwt = localStorage.getItem("jwtToken");
        console.log("mytoken",jwtDecode(jwt));
        const names = jwtDecode(jwt)
        return axios.get('http://localhost:3001'+'/seller/'+ names.id)
        .then(response => {
            this.setState({ products: response.data });
          });
      }
    componentDidMount() {
        this.getSellerProducts();
    }
    render() { 
        const {products} = this.state
        return (  
            // <div>
            //     <li>
            //         {products.map((i,index)=>{
            //             return(
            //                 <div>{i.title}</div>
            //             )
            //         })}
            //     </li>
            // </div>

            
            <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">
                
                    <div className="table100 ver1 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                    <tr className="row100 head">
                                        <th className="cell100 column1">Title</th>
                                        <th className="cell100 column2">Content</th>
                                        <th className="cell100 column3">Tags</th>
                                        <th className="cell100 column4">Date</th>
                                        <th className="cell100 column4">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
    
                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                {products.map((i,index)=>{
                         return(
                                    <tr className="row100 body">
                                        <td className="cell100 column1">{i.title}</td>
                                        <td className="cell100 column2">{i.content}</td>
                                        <td className="cell100 column3">{i.results}</td>
                                        <td className="cell100 column4">{i.date}</td>
                                        <td className="cell100 column4"><i class="fa fa-edit"></i><i class="fa fa-trash"></i></td>
                                    </tr>
                                      )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                   
                    </div>
</div>     
</div>            
        );
    }
}
 
export default AllProducts;