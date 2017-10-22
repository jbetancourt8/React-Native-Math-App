import React, { Component } from 'react';
import { View, Text, Dimensions, Keyboard, Animated, Platform } from 'react-native';
import PropTypes from 'prop-types';

const imageWidth = Dimensions.get('window').width / 2;

const largeContainerSize = imageWidth;
const largeImageSize = imageWidth / 2;

const smallContainerSize = imageWidth / 2;
const smallImageSize = imageWidth / 4;

const ANIMATION_DURATION = 250;

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSize: {
    width: largeContainerSize,
    height: largeContainerSize,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSize: {
    width: largeImageSize,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: 2,
    marginTop: 15,
    color: 'white'
  }
};

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(largeContainerSize);
    this.imageWidth = new Animated.Value(largeImageSize);
  }

  componentDidMount() {
    const verb = Platform.OS === 'ios' ? 'Will' : 'Did';

    this.keyboardShowListener = Keyboard.addListener(`keyboard${verb}Show`, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(`keyboard${verb}Hide`, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: smallContainerSize,
        duration: ANIMATION_DURATION
      }),

      Animated.timing(this.imageWidth, {
        toValue: smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: largeContainerSize,
        duration: ANIMATION_DURATION
      }),

      Animated.timing(this.imageWidth, {
        toValue: largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  render() {
    const containerImageSize = [
      styles.containerSize,
      { height: this.containerImageWidth, width: this.containerImageWidth }
    ];

    const imageStyle = [
      styles.imageSize,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode='contain'
          style={containerImageSize}
          source={require('./images/background.png')}
        >
          <Animated.Image
            resizeMode='contain'
            style={imageStyle}
            source={require('./images/mathLogo.png')}
          />
        </Animated.Image>
        <Text style={styles.textStyle}>Math App</Text>
      </View>
    );
  }
}

export default Logo;
