import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ListItem } from '../components/List/ListItem';
import { Separator } from '../components/List/Separator';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
};

class Settings extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  themesPressed = () => {
    this.props.navigation.navigate('Themes', {
      title: 'Themes'
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem
          text='Themes'
          onPress={this.themesPressed}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export { Settings };
