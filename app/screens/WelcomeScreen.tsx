import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';

import AppText from '../components/AppText';
import BigButton from '../components/BigButton';

export default function WelcomeScreen() {
    return (
        <ImageBackground blurRadius={10} source={require('../assets/background.jpg')} style={styles.backgroundContainer}>
            <View style={styles.logoBox}>
                <Image source={require('../assets/logo-red.png')} style={styles.logoImg}/>
                <AppText>Sell What You Don't Need</AppText>
            </View>
            <BigButton 
              title='Login'
              color={colors.primary}
              onPress={() => console.log('Login Button')}
            />
            <BigButton
              title='Register'
              color={colors.secondary}
              onPress={() => console.log('Register Button')}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 25,
    gap: 15
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 70
  },
  logoImg: {
    width: 125,
    height: 125
  },
});
