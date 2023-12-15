import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./src/screens/categoriesScreen/CategoriesScreen";
import { useFonts } from 'expo-font'
import ProductsByCategoryScreen from "./src/screens/productsByCategoryScreen/ProductsByCategoryScreen";
import { useState } from "react";


export default function App() {

  const [categorySelected, setCategorySelected] = useState('')

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



  return (
    <>{
      categorySelected
        ?
        <ProductsByCategoryScreen category={categorySelected} />
        :
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>

  );
}

