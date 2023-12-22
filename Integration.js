// Import necessary libraries
import React, { Component } from 'react';
import axios from 'axios';

class Integration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    // Fetch data from the server
    axios.get('/api/integration')
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <h2>Integration with Business Systems</h2>
        {data.map(item =>
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Integration;
