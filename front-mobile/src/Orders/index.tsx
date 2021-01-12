import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text} from 'react-native';
import OrderCard from '../OrderCard';
import {fetchOrders} from '../api';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header';

export default function Orders() {
  const [orders,setOrders] = useState<Order []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () =>{
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(()=>setIsLoading(false));
  }

  useEffect(()=>{
    if (isFocused){
      fetchData();
    }
      
  },[isFocused]);

  

  const handleOnPress = (order: Order) =>{
    navigation.navigate('OrderDetails',{
      order
    });
  }
  
  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
          orders.map(order =>(
            <TouchableWithoutFeedback 
              key={order.id} 
              onPress={() => handleOnPress(order)}
            >

              <OrderCard order={order}/>
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingRight: '5%',
    paddingLeft: '5%',

  }
});
