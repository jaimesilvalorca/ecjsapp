import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import CategoriesScreen from "../screens/categoriesScreen/CategoriesScreen"
import ProductDetailScreen from "../screens/productDetailScreen/ProductDetailScreen"
import ProductsByCategoryScreen from "../screens/productsByCategoryScreen/ProductsByCategoryScreen"

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}
                    options={{
                        headerShown:false
                    }}

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