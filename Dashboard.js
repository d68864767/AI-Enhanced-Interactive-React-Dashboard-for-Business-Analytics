// Import necessary libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your state here
    };
  }

  componentDidMount() {
    // Fetch initial data here if needed
  }

  render() {
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <h2>Dashboard</h2>
        </header>
        <div className="Dashboard-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Define the type of props for class components
Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
