import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAlldata} from './api/axios';
import axios from 'axios';
import Card from './src/components/Card';
import {post, postdata} from './interface/post';

const App = () => {
  const [data, setData] = useState<postdata[]>([]);
  const [endPoint, setEndPoint] = useState('hot');
  const categoryArray = ['hot', 'new', 'top', 'controversial'];

  const getAllPosts = async () => {
    await getAlldata(endPoint);
  };
  useEffect(() => {
    getAlldata(endPoint).then(res => {
      setData(res.data?.data?.children);
    });
  }, [endPoint]);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.category}>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal
          data={categoryArray}
          renderItem={item => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setEndPoint(item.item)}>
              <Text style={styles.btnText}> {item.item} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.postWrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={item => <Card item={item?.item?.data} />}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },

  category: {
    flex: 1,
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'yellow',
    width: 100,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  btnText: {
    color: 'black',
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  postWrapper: {
    flex: 10,
    // backgroundColor: 'red',
  },
});
