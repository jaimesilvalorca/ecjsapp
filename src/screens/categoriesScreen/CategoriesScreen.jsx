import {Text, View } from 'react-native'
import styles from './Styles'
import Header from '../../components/header/Header'

const CategoriesScreen = () => {
  return (
    <>
    <Header title={'Categorias'}/>
    <View style={styles.container}>
      <Text>Categorías</Text>
    </View>
    </>
  )
}

export default CategoriesScreen
