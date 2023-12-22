// Import necessary libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWidgetData } from './actions';

class Widget extends Component {
  componentDidMount() {
    // Fetch initial widget data
    this.props.fetchWidgetData();
  }

  render() {
    const { widgetData } = this.props;

    return (
      <div className="Widget">
        <header className="Widget-header">
          <h2>Widget</h2>
        </header>
        <div className="Widget-content">
          {/* Render your widget data here */}
          {widgetData.map((data, index) => (
            <div key={index}>
              {/* Render your data here */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Define the type of props for class components
Widget.propTypes = {
  fetchWidgetData: PropTypes.func.isRequired,
  widgetData: PropTypes.array.isRequired,
};

// Map state to props
const mapStateToProps = state => ({
  widgetData: state.widgetData,
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  fetchWidgetData: () => dispatch(fetchWidgetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
