import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../Header';

function OrderDetails() {
   const navigation = useNavigation();

   const handleOnPress = () => {
      navigation.navigate('Orders');
   }

   return (
      <>
         <Header />
         <View style={styles.container}>
            <Text>Detalhes do pedido</Text>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingRight: '5%',
      paddingLeft: '5%'
   },
   button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
   },
   buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
   }
});

export default OrderDetails;