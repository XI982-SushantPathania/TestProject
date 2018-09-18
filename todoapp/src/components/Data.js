import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
    state = {
      people: []
    }
    componentDidMount() { 
        axios.get("https://swapi.co/api/people/1/")
          .then(res => {
            console.log(res);
            const people = res.data;
            this.setState({ people });
          })
      }
     
      render() {
        return (
          <ul>
            { this.state.people.map(people => <li>{people.name}</li>)}
          </ul>
        )
      }
    }