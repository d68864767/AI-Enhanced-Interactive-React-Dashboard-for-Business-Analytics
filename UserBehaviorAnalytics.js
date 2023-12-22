// Import necessary libraries
import React, { Component } from 'react';
import axios from 'axios';

class UserBehaviorAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userBehaviorData: [],
    };
  }

  componentDidMount() {
    // Fetch initial data from the server
    axios.get('/api/userBehaviorAnalytics')
      .then(res => {
        const userBehaviorData = res.data;
        this.setState({ userBehaviorData });
      })
      .catch(err => console.log(err));
  }

  render() {
    // Render the user behavior data in a suitable format
    return (
      <div className="UserBehaviorAnalytics">
        <header className="UserBehaviorAnalytics-header">
          <h2>User Behavior Analytics</h2>
        </header>
        <div className="UserBehaviorAnalytics-content">
          {this.state.userBehaviorData.map((data, index) => (
            <div key={index}>
              <p>User: {data.user}</p>
              <p>Interaction: {data.interaction}</p>
              <p>Timestamp: {data.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserBehaviorAnalytics;
