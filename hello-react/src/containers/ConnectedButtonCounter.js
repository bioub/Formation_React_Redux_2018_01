import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withButtonHide } from '../hocs/withButtonHide';
import { countSelector } from '../selectors';
import { countCreator } from '../actions/count';

export const ButtonCounter = ({count, handleClick, index}) => {
  return (
    <button onClick={() => handleClick(index)}>
      {count}
    </button>
  );
};

ButtonCounter.propTypes = {
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  count: countSelector(state, props.index),
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (index) => dispatch(countCreator(index)),
});

export const ConnectedButtonCounter = connect(mapStateToProps, mapDispatchToProps)(ButtonCounter);
export const ConnectedButtonCounterHideable = withButtonHide(ConnectedButtonCounter);

/*
// ressemble à ça
function connect(mapStateToProps, mapDispatchToProps) {
  const propsFromState = mapStateToProps(state);
  const propsFromDispatch = mapDispatchToProps(dispatch);
  return function(WrappedComp) {
    return () => {
      <WrappedComp {...propsFromState} {...propsFromDispatch} />
    }
  }
}
*/