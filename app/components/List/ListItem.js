import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

const styles = {
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 16,
    color: '#343434'
  }
};

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableOpacity>
);

ListItem.prototype = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string
};

export { ListItem };
