import React, { useEffect, useState } from 'react';
import {  FlatList, Text, View, Button, TextInput } from 'react-native';
//import axios;

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [jsonExpr,setJsonExpr]= useState("");
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
    postData('http://localhost:5000/storeData', {apikey:apikey,data:data})
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        getData(apikey)
      });
    /*
    fetch('http://localhost:5000/storeData/'+apikey+'/'+data)
     .then((response) => {console.log('response=',response)
                           return response.json()})
     .then((json) => setData(json))
     .catch((error) => console.error(error))
     .finally(() => setLoading(false));
     */
  }

  async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
/*
postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  */


  useEffect(() => {
     getData('123')

  }, []);

  return (
    <View>
      <Text style={{fontSize:30}}>API Demo </Text>
      <TextInput
          placeholder="add JSON here"
          onChangeText={(text) => setJsonExpr(text)} />
      <Button
         title="Store testing data"
         onPress={() => {
           //storeData(123,JSON.stringify([{a:"hello world",b:2},{a:3,b:4},new Date()]))
           storeData(123,jsonExpr)

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
