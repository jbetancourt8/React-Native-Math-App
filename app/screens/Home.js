import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import InputWithButton from '../components/Input/InputWithButton';
import Output from '../components/Output/Output';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  settingsPressed = () => {
    this.props.navigation.navigate('Settings', {
      title: 'Settings'
    });
  };

  infoPressed = () => {
    this.props.navigation.navigate('Info', {
      title: 'Information'
    });
  };

  handleTextChange = (text) => {
    this.setState({ text });
  };

  operations = () => {
    this.props.navigation.navigate('OperationsList', {
      title: 'Operations List'
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={[styles.container, { backgroundColor: this.props.primaryColor }]}>

          <StatusBar translucent={false} barStyle='light-content' />
          <Header infoPressed={this.infoPressed} settingsPressed={this.settingsPressed} />
          <KeyboardAvoidingView behavior='padding'>
            <Logo tintColor={this.props.primaryColor} />
            <InputWithButton
              buttonText={this.props.initialOperation}
              onPress={this.operations}
              defaultValue='Simplify'
              onChangeText={this.handleTextChange}
              inputText={this.state.text}
            />
            <Output text={this.state.text} />
          </KeyboardAvoidingView>
          
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => {
  const initialOperation = state.operationsReducer.initialOperation;
  const primaryColor = state.themesReducer.primaryColor;

  return { initialOperation, primaryColor };
};

export default connect(mapStateToProps)(Home);
