import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {post} from '../../interface/post';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
const Card = (props: post) => {
  const hours = Math.floor((props.item.created / 1000 / 60 / 60) % 24);
  // const handleWebView = () => {
  //   ;
  // };
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.header}>
        <Text style={styles.text}>{props.item.author}</Text>
        <Text style={styles.hour}>{hours} ago</Text>
      </View>
      <Text style={styles.textTitle}>{props.item.title}</Text>
      <Image source={{uri: props.item?.thumbnail}} style={styles.img} />
      <View style={styles.icons}>
        <Text style={styles.score}>
          {' '}
          <Icon name="arrow-up" size={20} /> {props.item.score}
        </Text>
        <Text style={styles.score}>
          {' '}
          <Icon name="comment-outline" size={20} /> {props.item.num_comments}
        </Text>
        <Text style={styles.score}>
          {' '}
          <Icon name="share" size={25} />
        </Text>
      </View>
      <WebView
        source={{uri: 'https://www.npmjs.com/package/react-native-webview'}}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 15,
    shadowColor: 'white',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: '100%',
    justifyContent: 'center',

    backgroundColor: '#5F264A',
  },
  img: {
    height: 400,
    width: '96%',
    resizeMode: 'cover',
    marginTop: 5,
    borderRadius: 20,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 20,
  },
  hour: {
    color: 'white',
    paddingLeft: 10,
    fontWeight: '700',
  },
  textTitle: {
    color: 'white',
    paddingLeft: 10,
    marginBottom: 10,
  },
  score: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',

    marginBottom: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
