import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ProductListItem from '../../../components/ProductListItem'
import { useProductList } from '@/api/products';


export default function MenuScreen() {
  const { data: products, isLoading, error } = useProductList();


  if (isLoading) {
    return <ActivityIndicator />
  }
  if (error) {
    return <Text>Faild to laod data</Text>
  }


  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}


