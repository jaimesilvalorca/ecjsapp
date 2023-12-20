import { Text, View, FlatList } from 'react-native'
import styles from './Styles'
import products_data from '../../data/products_data.json'
import ProductItem from '../../components/productItem/ProductItem'
import Header from '../../components/header/Header'
import { useState, useEffect } from 'react'
import Search from '../../components/search/Search'

const ProductsByCategoryScreen = ({navigation,route}) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')


  console.log(route)
  const {category} = route.params

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category === category)
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  }, [category, search])



  const renderProductItem = ({ item }) => (

    <ProductItem 
    product={item} 
    navigation={navigation}

    />

  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <Search onSearchHandlerEvent={onSearch} />
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        key={item => item.id}

      />
    </>
  )
}

export default ProductsByCategoryScreen

