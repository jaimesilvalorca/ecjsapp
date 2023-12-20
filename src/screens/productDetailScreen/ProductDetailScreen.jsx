import { ActivityIndicator, Image, Text, TouchableOpacity, View, useWindowDimensions,ScrollView } from 'react-native'
import styles from './Styles'
import products_data from '../../data/products_data.json'
import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'

const ProductDetailScreen = ({ route}) => {
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()

  const productId = route.params

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    const productFound = products_data.find(product => product.id === productId)
    setProductSelected(productFound)
    setIsLoading(!isLoading)
    console.log(productFound)
  }, [productId])



  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>
            <ScrollView >
              <Image
                source={{ uri: productSelected.images[0] }}
                resizeMode='cover'
                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={() => null}>
                  <Text style={styles.buyText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>

      }
    </>
  )
}

export default ProductDetailScreen

