import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import CategoriesScreen from "../screens/categoriesScreen/CategoriesScreen"
import ProductDetailScreen from "../screens/productDetailScreen/ProductDetailScreen"
import ProductsByCategoryScreen from "../screens/productsByCategoryScreen/ProductsByCategoryScreen"
import Header from "../components/header/Header"

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    ({navigation,route}) =>({
                        header:()=><Header title={route.name} navigation={navigation}/>
                    })
                }
            >
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}

                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategoryScreen}

                />
                <Stack.Screen
                    name="Detalle"
                    component={ProductDetailScreen}

                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator