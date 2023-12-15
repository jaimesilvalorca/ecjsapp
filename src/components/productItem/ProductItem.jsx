import {Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'

const ProductItem = ({product}) => {
  return (
    <TouchableOpacity style={styles.containerProductItem}>
        <Text style={styles.productTitle}>
            {product.title}
        </Text>
        <Image 
        style={styles.productImage}
        resizeMode='cover'
        source={{uri:product.thumbnail }}
        
        />

    </TouchableOpacity>
  )
}

export default ProductItem