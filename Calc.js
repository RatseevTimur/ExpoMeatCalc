import React, { useState, useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Image, View, Picker, Alert, Button, Linking } from 'react-native';
import {
    Text,
    Link,
    HStack,
    NativeBaseProvider,
    Box,
    Input
  } from "native-base";
  

export default function Calculator() {
    const [selectedValue, setSelectedValue] = useState("Свинина");
    const [people, setInputOne] = useState('');
    const [num, setInputTwo] = useState('');
  
    const fire = {"Свинина": 0.3, "Говядина": 0.35, "Курица":0.30, "Рыба":0.20, "Баранина":0.35,
    "Картофель":0.3, "Кабачки/Баклажаны":0.25, "Помидоры":0.40, "Шампиньоны":0.57,}
  
    let portion = selectedValue === "Свинина" || selectedValue === "Говядина" || selectedValue === "Курица" || 
      selectedValue === "Рыба" || selectedValue === "Баранина" ? 0.3 : 0.15
  
    function calc(){
      let result = num*people*(portion/(1 -fire[selectedValue]))
    //   if(result < 1){
    //     return (" " + result.toFixed(3) * 1000 + " грамм")
    //   }
    //   if(result >= 1){
        // return (" " + result.toFixed(1) + " килограмм")
    //   }
        if(result < 1 && result > 0){
            return ( 
        <HStack space={2} alignItems="center">
            <Text>Достаточно купить - </Text>
            
            <Box
                _web={{
                _text: {
                    fontFamily: "monospace",
                    fontSize: "sm",
                },
                }}
                px={2}
                py={1}
                _dark={{ bg: "blueGray.800" }}
                _light={{ bg: "blueGray.200" }}
            >
                {result.toFixed(3)}
            </Box>

            <Text>kg</Text>
        </HStack>)
        }
        if(result >= 1){
            return (
                
        <HStack space={2} alignItems="center">
            <Text>Достаточно купить - </Text>
            
            <Box
                _web={{
                _text: {
                    fontFamily: "monospace",
                    fontSize: "sm",
                },
                }}
                px={2}
                py={1}
                _dark={{ bg: "blueGray.800" }}
                _light={{ bg: "blueGray.200" }}
            >
                {result.toFixed(1)}
            </Box>

            <Text>kg</Text>
        </HStack>
            )
        }
        if(result === 0){
            return null
        }
    
    }
  
    return (
      <View style={styles.container}>
        <Text>
        Из чего готовим: 
        <br/>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 200,
                backgroundColor: "#cfe3ff", borderRadius: 10, borderWidth: 0.5, padding: 5 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Свинина" value="Свинина" />
            <Picker.Item label="Говядина" value="Говядина" />
            <Picker.Item label="Курица" value="Курица" />
            <Picker.Item label="Рыба" value="Рыба" />
            <Picker.Item label="Баранина" value="Баранина" />
  
            <Picker.Item label="Картофель" value="Картофель" />
            <Picker.Item label="Кабачки/Баклажаны" value="Кабачки/Баклажаны" />
            <Picker.Item label="Помидоры" value="Помидоры" />
            <Picker.Item label="Шампиньоны" value="Шампиньоны" />
          </Picker>
        </Text>
  
        <br/>
  
        <Text>Количество человек:
        <br/>
          <input
            type="number"
            name='input1'
            min="1"
            value={people}
            placeholder="Сколько будет едаков?"
            onChange={(event) => setInputOne(event.target.value)}
            style={{ height: 50, width: 200, paddingLeft: 10,
                 backgroundColor: "#cfe3ff", borderRadius: 10, border: "none" }}
          />
        </Text>

        <br/>

        <Text>Количество приемов пищи:
        <br/>
          <input
            type="number"
            name='input1'
            min="1"
            value={num}
            placeholder="На сколько раз готовим?"
            onChange={(event) => setInputTwo(event.target.value)}
            style={{ height: 50, width: 200, paddingLeft: 10,
                backgroundColor: "#cfe3ff", borderRadius: 10, border: "none" }}
          />
        </Text>
        <br/>
        <br/>

       {calc()}
  
       
       <br/>
       <br/>
        <Link href="https://github.com/RatseevTimur" isExternal>
            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
                <Image
                source={require('./assets/pngwing.com.png')}
                style={styles.buttonImageIconStyle}
                />
                <View style={styles.buttonIconSeparatorStyle} />
                <Text> Open My GitHub </Text>
            </TouchableOpacity>
        </Link>
      
        
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
    },
    buttonGPlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#dc4e41',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 40,
      width: 40,
      resizeMode: 'stretch',
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#fff',
      width: 1,
      height: 40,
    }
  });
  