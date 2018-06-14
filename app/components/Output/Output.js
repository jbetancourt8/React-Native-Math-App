import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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
  renderOutput() {
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

  renderLoading() {
    return (
      <View style={styles.constainer}>
        <ActivityIndicator size="large" color={this.props.primaryColor} />
      </View>
    )
  }

  render() {
    const isLoading = (this.props.loading) ? this.renderLoading() : this.renderOutput(); 

    return (
      <View>
        {isLoading}
      </View>
    );
  }
}

const mapToState = (state) => {
  const initialEquation = state.operationsReducer.initialEquation;
  const output = state.operationsReducer.output;
  const primaryColor = state.themesReducer.primaryColor;
  const loading = state.operationsReducer.loading;

  return { initialEquation, output, primaryColor, loading };
};

export default connect(mapToState)(Output);
