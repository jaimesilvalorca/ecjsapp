import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import cart_data from "../../data/cart_data.json"
import CartItem from '../../components/cartItem/CartItem'
import styles from './Styles'
import { useState,useEffect} from 'react'


const CartScreen = () => {

  const [total, setTotal] = useState()

  useEffect(()=>{
      const totalCart = cart_data.reduce((acc,currentItem)=>(

        acc += currentItem.price * currentItem.quantity

      ),0)

      setTotal(totalCart)

  },[])

  const renderCartItem = ({item}) =>(
    <CartItem item={item} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total:${total}</Text>
        <TouchableOpacity 
        style={styles.confirmButton}
        onPress={null}
        >
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>

      </View>
    </View>



  )
}

export default CartScreen