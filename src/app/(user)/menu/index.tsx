import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import ProductListItem from '../../../components/ProductListItem'
import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/types';
import { useProductList } from '@/api/products';

export default function MenuScreen() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data, error } = await supabase.from('products').select('*');
  //     console.log(error);
  //     console.log(data);
  //   }
  //   fetchProducts();
  // })

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


