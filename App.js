/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'




const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed=(currency)=>{
    if(!inputValue){
      alert("Please enter VALUE")
    }
    result=parseFloat(inputValue)*currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
    setInputValue(0);
  }


  return (
    <>
      <ScrollView backgroundColor='#1b262c' keyboardShouldPersistTaps="handled" contentInset="automatic">
        <SafeAreaView style={styles.container}>
          <Text style={styles.head}>Ruppee To Different Currency Convertor</Text>
          <Text style={styles.head}>By Pratham Meghani</Text>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter Value" placeholderTextColor="#c1c1c1" value={inputValue} onChangeText={(inputValue)=>(setInputValue(inputValue))}/>


          </View>
          <View style={styles.converButtonContainer}>
      
{Object.keys(currencyPerRupee).map((currency)=>(
  <TouchableOpacity key={currency} style={styles.converterButton} onPress={()=>buttonPressed(currency)}><Text style={styles.temp}>{currency}</Text></TouchableOpacity>
))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head:{
    marginTop:60,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontStyle:'italic',
    textTransform:'uppercase'
  }
  , resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',

    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',

  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',

  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa'

  },
  input: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

  },
  converButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,

  },
  temp:{
  color:'white',
  fontSize:20
  },
  converterButton:{
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    width:"50%",
    height:100,
    backgroundColor:'#0f4c75',
    borderColor:'#bbe1fa',
    marginTop:20

  }
})

