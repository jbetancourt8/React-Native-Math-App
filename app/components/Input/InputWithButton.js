import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeInitialEquation, changeOutput } from '../../actions/operations';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = {
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginVertical: 12,
    flexDirection: 'row',
    paddingBottom: 10,
    alignSelf: 'center'
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#E2E2E2'
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '#797979'
  },
  submitButtonContainer: {
    marginBottom: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4
  },
  submitButtonStyle: {
    fontSize: 25,
    fontWeight: '600',
    margin: 5
  }
};

class InputWithButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    onChangeText: PropTypes.func,
    inputText: PropTypes.string,
    dispatch: PropTypes.func
  };

  submitText = () => {
    let temp = this.props.inputText;

    if (temp.includes('/')) {
      temp = temp.replace('/', '(over)');
    }

    this.props.dispatch(changeInitialEquation(temp));

    const operation = this.props.initialOperation.toLowerCase();

    fetch(`https://newton.now.sh/${operation}/${this.props.initialEquation}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .then((response) => {
        this.props.dispatch(changeOutput(response.result));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
            <Text style={[styles.buttonText, { color: this.props.primaryColor }]}>
              {this.props.buttonText}
            </Text>
          </TouchableOpacity>
          <View style={styles.border} />
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.input}
            onSubmitEditing={Keyboard.dismiss}
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={this.props.onChangeText}
          />
        </View>
        <TouchableOpacity style={styles.submitButtonContainer} onPress={this.submitText}>
          <Text style={[styles.submitButtonStyle, { color: this.props.primaryColor }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapToState = (state) => {
  const initialEquation = state.operationsReducer.initialEquation;
  const initialOperation = state.operationsReducer.initialOperation;
  const primaryColor = state.themesReducer.primaryColor;

  return {
    initialEquation,
    initialOperation,
    primaryColor
  };
};

export default connect(mapToState)(InputWithButton);
