// Import necessary libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAnomalyData } from './actions';

class AnomalyDetection extends Component {
  componentDidMount() {
    // Fetch initial anomaly data
    this.props.fetchAnomalyData();
  }

  render() {
    const { anomalyData } = this.props;

    return (
      <div className="AnomalyDetection">
        <header className="AnomalyDetection-header">
          <h2>Anomaly Detection</h2>
        </header>
        <div className="AnomalyDetection-content">
          {anomalyData.map((anomaly, index) => (
            <div key={index} className="AnomalyDetection-item">
              <h3>{anomaly.title}</h3>
              <p>{anomaly.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

AnomalyDetection.propTypes = {
  fetchAnomalyData: PropTypes.func.isRequired,
  anomalyData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  anomalyData: state.anomalyData,
});

const mapDispatchToProps = dispatch => ({
  fetchAnomalyData: () => dispatch(fetchAnomalyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnomalyDetection);
