import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BORDER_RADIUS = 4;

const styles = {
  constainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 16
  },
  textStyle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 5
  }
};

class Output extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <Text style={[styles.textStyle, { color: this.props.primaryColor, paddingBottom: 20 }]}>
          Input: {this.props.initialEquation}
        </Text>
        <Text style={[styles.textStyle, { color: this.props.primaryColor }]}>
          Output: {this.props.output}
        </Text>
      </View>
    );
  }
}

const mapToState = (state) => {
  const initialEquation = state.operationsReducer.initialEquation;
  const output = state.operationsReducer.output;
  const primaryColor = state.themesReducer.primaryColor;

  return { initialEquation, output, primaryColor };
};

export default connect(mapToState)(Output);
