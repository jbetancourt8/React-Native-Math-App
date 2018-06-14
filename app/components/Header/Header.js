import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = 'white';
const ICON_SIZE = 25;

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingTop: Platform.OS === 'ios' ? 40 : null,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoButton: {
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  settingsButton: {
    alignItems: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  icon: {
    width: 18
  }
};

const Header = ({ infoPressed, settingsPressed }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.infoButton} onPress={infoPressed}>
      <Ionicons name={`${ICON_PREFIX}-information-circle`} color={ICON_COLOR} size={ICON_SIZE} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingsButton} onPress={settingsPressed}>
      <Ionicons name={`${ICON_PREFIX}-settings`} color={ICON_COLOR} size={ICON_SIZE} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  infoPressed: PropTypes.func,
  settingsPressed: PropTypes.func
};

export { Header };
