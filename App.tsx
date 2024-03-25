import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/feature/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';


export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <LoadingProvider> */}
          <Routes />
        {/* </LoadingProvider> */}
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
