import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'
import { useState } from "react";
import Navigator from "./src/navigation/Navigator";



export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  console.log("Categoria seleccionada:", categorySelected)


  const [fontLoaded] = useFonts({
    'ComicNeue-Regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'ComicNeue-Italic': require('./assets/fonts/ComicNeue-Italic.ttf'),
    'ComicNeue-Light': require('./assets/fonts/ComicNeue-Light.ttf'),
    'ComicNeue-Bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onSelectProductId = (productId)=>{
    setProductIdSelected(productId)

  }


  return (

    <Navigator/>


  );
}

