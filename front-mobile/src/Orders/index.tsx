import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { fetchOrders } from '../api'
import Header from '../Header'
import OrderCard from '../OrderCard'

function Orders() {
   useEffect(() => {
      fetchOrders()
         .then(response => console.log(response.data))
         .catch(error => console.log(error));
   }, []);

   return (
      <>
         <Header />
         <ScrollView style={styles.container}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
         </ScrollView>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingRight: '5%',
      paddingLeft: '5%',
   }
});

export default Orders;