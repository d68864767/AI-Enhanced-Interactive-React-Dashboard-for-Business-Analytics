// Import necessary libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateViewportDimensions } from './actions';

class ResponsiveDesign extends Component {
  componentDidMount() {
    // Add event listener for window resize
    window.addEventListener('resize', this.handleResize);
    // Initial update of viewport dimensions
    this.props.updateViewportDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  componentWillUnmount() {
    // Remove event listener when component unmounts
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    // Update viewport dimensions on window resize
    this.props.updateViewportDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    const { viewportDimensions } = this.props;

    return (
      <div className="ResponsiveDesign">
        <header className="ResponsiveDesign-header">
          <h2>Responsive Design</h2>
        </header>
        <div className="ResponsiveDesign-content">
          {/* Render viewport dimensions for demonstration */}
          <p>Viewport width: {viewportDimensions.width}px</p>
          <p>Viewport height: {viewportDimensions.height}px</p>
        </div>
      </div>
    );
  }
}

// Define the type of props for class components
ResponsiveDesign.propTypes = {
  updateViewportDimensions: PropTypes.func.isRequired,
  viewportDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

// Map state to props
const mapStateToProps = state => ({
  viewportDimensions: state.viewportDimensions,
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  updateViewportDimensions: dimensions => dispatch(updateViewportDimensions(dimensions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDesign);
