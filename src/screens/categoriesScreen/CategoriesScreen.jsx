import {FlatList, Text, View } from 'react-native'
import styles from './Styles'
import Header from '../../components/header/Header'
import categories_data from '../../data/categories_data.json'
import CategoryItem from '../../components/categoryItem/CategoryItem'


const CategoriesScreen = ({onSelectCategoryEvent}) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>)


  return (
    <>
    <Header title={'Categorias'}/>
    <FlatList 
      data={categories_data}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item}
    />

    </>
  )
}

export default CategoriesScreen
