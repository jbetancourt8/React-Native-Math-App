import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = {
  separator: {
    marginLeft: 20,
    backgroundColor: '#979797',
    flex: 1,
    height: StyleSheet.hairlineWidth
  }
};

const Separator = () => <View style={styles.separator} />;

export { Separator };
