import React, { Component } from 'react';

import './style.css';

const API = 'http://www.json-generator.com/api/json/get/bViktPgqmq?indent=2';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hits: []
        };

    }

    componentWillMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ hits: data }))
    }

    render() {
        const { hits } = this.state;
        console.log(this.state.hits);

        return (

            <div className="people">
              <h1>People</h1>
              <table>
                  <thead>
                  <tr>
                      <th>#</th>
                      <th style={{width:"130px"}}>Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Company</th>
                      <th>EyeColor</th>
                      <th>FavoriteFruits</th>
                      <th style={{width:"150px"}}>Phone</th>
                      <th style={{width:"220px"}}>Email</th>
                  </tr>
                  </thead>
              </table>
                {hits.map(hit =>
                    <div className="people">

                            <table  key={hit.index} >
                            <tr>
                                <td>{hit.index+1}</td>
                                <td style={{width:"130px"}}>{hit.name}</td>
                                <td>{hit.gender}</td>
                                <td>{hit.age}</td>
                                <td>{hit.company}</td>
                                <td>{hit.eyeColor}</td>
                                <td style={{width:"110px"}}>{hit.favoriteFruit}</td>
                                <td style={{width:"150px"}}>{hit.phone}</td>
                                <td style={{width:"220px"}}>{hit.email}</td>
                            </tr>
                            </table>

                    </div>


                )}
            </div>
        );
    }
}

export default App;
