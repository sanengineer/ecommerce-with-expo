import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextField, Space, Button} from '../../components';

const SuccessRegister = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.emoji}>🎉</Text>
        <TextField
          textField="Register Success"
          fontFamily="Montserrat-Bold"
          fontSize={25}
        />
        <Space height={10} />
        <TextField
          textField="Let's Login And Grab Your Juices!"
          fontFamily="Montserrat-Regular"
          fontSize={15}
        />
        <Space height={50} />
        <Button
          txtDecorationLine="none"
          fontFam="Montserrat-Bold"
          txtSize={16}
          label="Login"
          padSizeX={20}
          padSizeY={60}
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
    </View>
  );
};

export default SuccessRegister;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 140,
    textAlign: 'center',
    paddingBottom: 50,
  },
});
