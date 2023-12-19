import {Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'

const ProductItem = ({product,navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Detalle',product.id)} style={styles.containerProductItem}>
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