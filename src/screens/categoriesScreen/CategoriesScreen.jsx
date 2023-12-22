import {FlatList, Text, View } from 'react-native'
import styles from './Styles'
// import categories_data from '../../data/categories_data.json'
import CategoryItem from '../../components/categoryItem/CategoryItem'
import {useSelector} from 'react-redux'


const CategoriesScreen = ({navigation}) => {

  const categories = useSelector(state=>state.shopReducer.categories)

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>)


  return (
    <>
    <FlatList style={styles.categories}
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item}
    />


    </>
  )
}

export default CategoriesScreen
