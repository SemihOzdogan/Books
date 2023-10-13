import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { BookItemModel } from '../models/models';

const BookItem: React.FC<BookItemModel> = ({ title, author, publicationYear }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bookmarkIcon}>
        <FontAwesome name="bookmark" size={25} color="#bbb" />
      </View>
      <View style={styles.bookImage}>
        <Image source={require("../img/book.png")} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>Author: {author}</Text>
        <Text style={styles.publicationYear}>{publicationYear as number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 80,
    flexDirection: "row",
    margin: 5,
    borderRadius: 8,
    padding: 5,
    backgroundColor: "#ddd",
  },
  bookmarkIcon: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  bookImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bookInfo: {
    flex: 4,
    borderLeftColor: "#bbb",
    borderLeftWidth: 0.5,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  author: {
    fontSize: 14,
  },
  publicationYear: {
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
    backgroundColor: "#bbb",
    borderRadius: 4,
  },
});

export default BookItem;