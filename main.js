import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const foo = () => {
  const a = 32;
  return a + 5;
}

const animate = () => {
  foo();
  requestAnimationFrame(animate);
};
requestAnimationFrame(animate);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 36 }}>foo() is: {foo()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
