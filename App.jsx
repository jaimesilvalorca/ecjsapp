import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'
import { useState } from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from 'react-redux'
import store from "./src/store";



export default function App() {


  const [fontLoaded] = useFonts({
    'ComicNeue-Regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'ComicNeue-Italic': require('./assets/fonts/ComicNeue-Italic.ttf'),
    'ComicNeue-Light': require('./assets/fonts/ComicNeue-Light.ttf'),
    'ComicNeue-Bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />


  return (

    <Provider store={store}>
      <TabNavigator />
    </Provider>


  );
}

