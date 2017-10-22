import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from '../components/List/ListItem';
import { Separator } from '../components/List/Separator';
import { changePrimaryColor } from '../actions/themes';

const BLUE = '#4F6D7A';
const ORANGE = '#D57A66';
const GREEN = '#00BD9D';
const PURPLE = '#9E768F';

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  themePressed = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem
          text='Blue'
          onPress={() => this.themePressed(BLUE)}
          selected
          checkmark={false}
          iconBackground={BLUE}
        />
        <Separator />
        <ListItem
          text='Orange'
          onPress={() => this.themePressed(ORANGE)}
          selected
          checkmark={false}
          iconBackground={ORANGE}
        />
        <Separator />
        <ListItem
          text='Green'
          onPress={() => this.themePressed(GREEN)}
          selected
          checkmark={false}
          iconBackground={GREEN}
        />
        <Separator />
        <ListItem
          text='Purple'
          onPress={() => this.themePressed(PURPLE)}
          selected
          checkmark={false}
          iconBackground={PURPLE}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
