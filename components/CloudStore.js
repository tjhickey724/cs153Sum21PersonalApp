import React, { useEffect, useState } from 'react';
import {  FlatList, Text, View, Button } from 'react-native';
//import axios;

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = (apikey) => {
    fetch('http://localhost:5000/getData/'+apikey)
     .then((response) => {console.log('response=',response)
                           return response.json()})
     .then((json) => setData(json))
     .catch((error) => console.error(error))
     .finally(() => setLoading(false));
  }

  const storeData = (apikey,data) => {
    /*
    axios({
      method: 'post',
      url: 'http://localhost:5000/storeData/',
      data: data
    })
    */
    fetch('http://localhost:5000/storeData/'+apikey+'/'+data)
     .then((response) => {console.log('response=',response)
                           return response.json()})
     .then((json) => setData(json))
     .catch((error) => console.error(error))
     .finally(() => setLoading(false));
  }


  useEffect(() => {
     getData('123')

  }, []);

  return (
    <View>
      <Button
         title="Store testing data"
         onPress={() => {
           storeData(123,JSON.stringify([{a:"hello world",b:2},{a:3,b:4},new Date()]))

      }} />

      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (<Text>Loading</Text>) : (
          <Text> data is {JSON.stringify(data)} </Text>
        )}
      </View>
    </View>
  );
};

export default App
