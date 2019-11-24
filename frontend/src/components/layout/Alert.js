import React from 'react';
import PropTypes from 'prop-types';
// connect is used when you want to interact a component with redux
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>

  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
