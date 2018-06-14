import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeInitialOperation } from '../actions/operations';
import Operations from '../data/Operations';
import { ListItem } from '../components/List/ListItem';
import { Separator } from '../components/List/Separator';

const styles = {
  container: {
    flex: 1
  }
};

class OperationsList extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePressed = (operation) => {
    this.props.dispatch(changeInitialOperation(operation));
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle='default' />
        <FlatList
          data={Operations}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === this.props.initialOperation}
              onPress={() => this.handlePressed(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const maptoState = (state) => {
  const initialOperation = state.operationsReducer.initialOperation;
  const primaryColor = state.themesReducer.primaryColor;

  return { initialOperation, primaryColor };
};

export default connect(maptoState)(OperationsList);
