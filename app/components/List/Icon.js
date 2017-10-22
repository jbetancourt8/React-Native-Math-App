import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconVisible: {
    backgroundColor: '#4F6D7A'
  },
  checkIcon: {
    width: 18
  }
};

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyle = [styles.icon];

  if (visible) {
    iconStyle.push(styles.iconVisible);
  }

  if (iconBackground) {
    iconStyle.push({ backgroundColor: iconBackground });
  }

  return (
    <View style={iconStyle}>
      {checkmark ? (
        <Image
          resizeMode='contain'
          style={styles.checkIcon}
          source={require('./images/check.png')}
        />
      ) : null}
    </View>
  );
};

Icon.prototype = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string
};

export { Icon };
