import React from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Omelets from '../assets/omelets'

const omeletRecipes = Omelets()

const DATA = omeletRecipes.map((x) => {
  x.id = x.href
  return(x)
})
const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];



const Item = ({ title, ingredients}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title.trim()}</Text>
    <Text>{ingredients.trim()}</Text>
  </View>
);

const ListDemoScreen = () => {
  const renderItem = ({ item }) => (
    <View>
      <Item title={item.title} ingredients={item.ingredients}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListDemoScreen;
