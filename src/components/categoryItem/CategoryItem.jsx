import {Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import Card from '../card/Card'

const CategoryItem = ({category,onSelectCategoryEvent}) => {
  return (
    <TouchableOpacity onPress={()=>onSelectCategoryEvent(category)}>
    <Card style={styles.cardContainer} >
        <Text style={styles.text}>{category}</Text>
    </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem
